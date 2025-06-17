# 🚗 Car Rental System

A full-featured Car Rental web application where users can explore, list, and book cars. The platform supports real-time availability updates, secure authentication, and seamless user experience across all devices.

## 🔗 Live Website
[🌐 Click Here to Visit](https://assignment-11-b9621.web.app/)

## 🧩 Project Structure
This project consists of two parts:
- **Client Repository**: [GitHub - Car Rental Client](https://github.com/Programming-Hero-Web-Course4/b11a11-client-side-tamim-111)
- **Server Repository**: [GitHub - Car Rental Server](https://github.com/Programming-Hero-Web-Course4/b11a11-server-side-tamim-111)

---

## 🚀 Key Features

### 🌍 Public Features
- Home Page with animated banner, recent listings, special offers
- Available Cars Page with search, sort, and view toggle (grid/list)
- Car Details Page with full information and booking option

### 🔐 Authentication
- Firebase Authentication with Email/Password & Google Sign-In
- JWT-based secure access for private routes using HTTP-only cookies

### 🧑‍💼 Private User Features
- **Add Car**: Authenticated users can list their cars with full details
- **My Cars**: View, update, and delete added cars with modal forms and confirmations
- **My Bookings**: View all bookings with cancel and modify options, including interactive confirmation modals

---

## 📚 Tech Stack

### Frontend
- React.js
- Tailwind CSS + DaisyUI
- React Router
- Firebase Authentication
- Axios
- React Hot Toast
- SweetAlert2

### Backend
- Node.js
- Express.js
- MongoDB
- dotenv
- cors
- jsonwebtoken
- cookie-parser

---

## 🔐 Security
- All sensitive data (Firebase keys, MongoDB URI, JWT secret) managed using `.env` files
- Private routes are protected using JWT validation middleware
- Cookies are HTTP-only and securely managed

---

## 📱 Responsiveness
The entire application is mobile-first and adapts beautifully to tablet and desktop screens using Tailwind CSS grid & flex utilities.

---

## 💾 Installation Instructions

### Clone the Repositories
```bash
git clone https://github.com/Programming-Hero-Web-Course4/b11a11-client-side-tamim-111
git clone https://github.com/Programming-Hero-Web-Course4/b11a11-server-side-tamim-111
