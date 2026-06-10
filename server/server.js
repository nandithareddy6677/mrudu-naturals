const express = require("express");
const cors = require("cors");
const Razorpay = require("razorpay");
const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});
console.log("KEY ID:", process.env.RAZORPAY_KEY_ID);
console.log(
  "SECRET EXISTS:",
  process.env.RAZORPAY_KEY_SECRET ? "YES" : "NO"
);

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.get("/", (req, res) => {
  res.send("MRUDU SERVER RUNNING");
});

app.get("/orders", (req, res) => {
  res.status(403).json({ message: "Orders are private" });
});
app.post("/save-order", async (req, res) => {
  try {
    const filePath = path.resolve(__dirname, "orders.json");
    let orders = [];

    if (fs.existsSync(filePath)) {
      orders = JSON.parse(fs.readFileSync(filePath, "utf8"));
    }

    const newOrder = {
      id: "MRD" + Date.now(),
      date: new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
      }),
      ...req.body,
    };

    orders.push(newOrder);
    fs.writeFileSync(filePath, JSON.stringify(orders, null, 2));

    const productsList =
      newOrder.cart?.map((item) => `${item.name} × ${item.qty}`).join("\n") || "-";

    Promise.allSettled([
      transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: `New MRUDU Order - ${newOrder.id}`,
        text: `
New MRUDU Order Received

Order ID: ${newOrder.id}
Date: ${newOrder.date}

Customer:
Name: ${newOrder.customer?.name || "-"}
Phone: ${newOrder.customer?.phone || "-"}
Email: ${newOrder.customer?.email || "-"}
Address: ${newOrder.customer?.address || "-"}
City: ${newOrder.customer?.city || "-"}
State: ${newOrder.customer?.state || "-"}
Pincode: ${newOrder.customer?.pincode || "-"}

Products:
${productsList}

Total: ₹${newOrder.total}
Payment ID: ${newOrder.paymentId || "-"}
Razorpay Order ID: ${newOrder.razorpayOrderId || "-"}
        `,
      }),

      transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: newOrder.customer?.email,
        subject: `Thank you for shopping with MRUDU - ${newOrder.id}`,
        text: `
Dear ${newOrder.customer?.name || "Customer"},

Thank you for shopping with MRUDU.

Your order has been received successfully.

Order ID: ${newOrder.id}

Products:
${productsList}

Total Paid: ₹${newOrder.total}

We will begin processing your order shortly and share tracking details once dispatched.

With love,
MRUDU
Beauty Preserved Through Time.
        `,
      }),
    ]).then((results) => {
      results.forEach((result, index) => {
        if (result.status === "rejected") {
          console.error(index === 0 ? "Owner Email Error:" : "Customer Email Error:", result.reason);
        }
      });
    });

    res.json({ success: true, orderId: newOrder.id });
  } catch (error) {
    console.error("Save Order Error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`MRUDU server running on port ${PORT}`);
});