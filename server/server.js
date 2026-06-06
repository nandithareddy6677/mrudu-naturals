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
  const filePath = path.resolve(__dirname, "orders.json");
  let orders = [];

  if (fs.existsSync(filePath)) {
    orders = JSON.parse(fs.readFileSync(filePath, "utf8"));
  }

  res.json(orders);
});

app.post("/create-order", async (req, res) => {
  try {
    const { amount } = req.body;

    const order = await razorpay.orders.create({
      amount: amount * 100,
      currency: "INR",
      receipt: "mrudu_order_" + Date.now(),
    });

    res.json(order);
  } catch (error) {
    console.error("Create Order Error:", error);
    res.status(500).json({ success: false });
  }
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
      date: new Date().toLocaleString(),
      ...req.body,
    };

    orders.push(newOrder);
    fs.writeFileSync(filePath, JSON.stringify(orders, null, 2));

    const productsList =
      newOrder.cart
        ?.map((item) => `${item.name} × ${item.qty}`)
        .join("\n") || "-";

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New MRUDU Order - ${newOrder.id}`,
      text: `
New MRUDU Order Received

Order ID: ${newOrder.id}
Date: ${newOrder.date}

Customer Details:
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
    });

    res.json({ success: true, orderId: newOrder.id });
  } catch (error) {
    console.error("Save Order Error:", error);
    res.status(500).json({ success: false });
  }
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`MRUDU server running on port ${PORT}`);
});