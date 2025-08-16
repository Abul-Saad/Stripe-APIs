# 💳 Stripe Payment Integration with Node.js & Express.js

This repository demonstrates how to integrate **Stripe Payment Gateway** into a Node.js + Express.js application using the **Payment Intents API**.  
It also includes a simple frontend (`stripe.html`) for testing payments.

---

## 📂 Project Structure
├─ controllers/
│ └─ paymentController.js # Handles payment logic
├─ routes/
│ └─ paymentRoutes.js # Defines payment API routes
├─ utils/
│ └─ stripe.js # Stripe configuration
├─ public/
│ └─ stripe.html # Simple frontend test page
├─ index.js # Main entry point (Express server)
├─ .env # Environment variables
├─ package.json # Dependencies

---

## ⚡ Features
- Create Payment Intent using Stripe API
- Confirm Payment from frontend
- Test with Postman & Stripe test cards
- Modular folder structure (Controllers, Routes, Utils)
- `.env` support for API keys

---

## 🛠️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/your-username/stripe-node-express.git
cd stripe-node-express
npm install
Create a .env file in the root directory:
STRIPE_SECRET_KEY=your_stripe_secret_key
PORT=5000
npm start


🚀 API Endpoints
✅ Create Payment Intent

POST /api/payments/create
{
  "amount": 5000,
  "currency": "usd",
  "customer_email": "test@example.com"
}


✅ Confirm Payment (Frontend or Postman)

POST /api/payments/confirm

{
  "paymentIntentId": "pi_12345"
}
