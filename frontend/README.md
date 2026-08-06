# 🛍️ OneCart — AI Powered E-Commerce Platform

A full stack MERN e-commerce platform with voice navigation, real Razorpay payment integration, and a complete admin dashboard — built and deployed independently.

🔗 **Live Demo:** https://onecart-frontend-rjar.onrender.com  
💻 **GitHub:** https://github.com/deveshups-ux/AI-Powered-E-Commerce-Website

---

## ✨ Key Features

### 👤 User Panel
- 🎤 **Voice Navigation** — speak to navigate any page hands-free (Web Speech API)
- 🔐 **Google + Email Authentication** — secure login with JWT & HTTP-only Cookies
- 🛒 **Real-time Cart Sync** — cart syncs instantly with the database
- 💳 **Razorpay Payment Integration** — full payment flow with server-side verification
- 📦 **Order Tracking** — users can view their order history and status
- 📱 **Fully Responsive** — works on mobile and desktop

### ⚙️ Admin Panel
- 📦 **Product Management** — add, edit, delete products
- 📋 **Order Management** — view and update order status
- 👥 **User Management** — manage registered users

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React.js, Tailwind CSS, Context API |
| Backend | Node.js, Express.js, REST APIs |
| Database | MongoDB, Mongoose |
| Auth | JWT, HTTP-only Cookies, Google OAuth |
| Payment | Razorpay Payment Gateway |
| Voice | Web Speech API |
| Deployment | Render (3 separate services) |

---

## 📁 Project Structure

```
OneCart/
├── frontend/        # React.js customer interface
├── backend/         # Node.js + Express REST API
└── admin/           # React.js admin dashboard
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js installed
- MongoDB Atlas account
- Razorpay account
- Google OAuth credentials

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/deveshups-ux/AI-Powered-E-Commerce-Website.git
cd AI-Powered-E-Commerce-Website
```

**2. Setup Backend**
```bash
cd backend
npm install
```

Create `.env` file in backend:
```
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret
```

```bash
npm start
```

**3. Setup Frontend**
```bash
cd frontend
npm install
npm run dev
```

**4. Setup Admin Panel**
```bash
cd admin
npm install
npm run dev
```

---

## 🔐 Authentication Flow

```
User registers/logs in
→ JWT token created on server
→ Stored in HTTP-only Cookie
→ Every protected route verified via Auth Middleware
→ Admin routes have separate Admin Auth Middleware
```

---

## 💳 Payment Flow

```
User places order
→ Razorpay order created on server
→ User completes payment on frontend
→ Payment verified server-side
→ Order saved to database only after verification
```

---

## 🎤 Voice Navigation

Built using the **Web Speech API** — users can speak commands like:
- "Open Collections"
- "Open Cart"
- "Go to Home"

The app listens, processes the command, and navigates automatically.

---

## 🌐 Deployment

All 3 services deployed separately on **Render**:

| Service | URL |
|---------|-----|
| Frontend | https://onecart-frontend-rjar.onrender.com |
| Backend | Render (private) |
| Admin | Render (private) |

> ⚠️ Free tier on Render may have cold start delay of ~30 seconds on first load.

---

## 📸 Screenshots

### Homepage
![Homepage](https://onecart-frontend-rjar.onrender.com)

---

## 🤝 Connect

**Devesh Tiwari**  
📧 deveshups@gmail.com  
🔗 [LinkedIn](https://www.linkedin.com/in/devesh-tiwari-642b03374)  
💻 [GitHub](https://github.com/deveshups-ux)

---

> Built with ❤️ by Devesh Tiwari — 2 months of real debugging, real deployment, real learning.
