# 🌐 Simple Web Server using Node.js (HTTP Module)

## 📌 Overview
This project demonstrates how to build a basic web server in Node.js using the built-in `http` module — without using frameworks like Express.  
It supports multiple routes, serves HTML + CSS files, and includes a custom 404 page.

The server is modular, uses asynchronous file handling, and shows how routing works at a low level in Node.js.

---

## 📁 Project Structure
simple-node-server/
│ 
├─ server.js # Main Node.js file 
├─ router.js # Routing logic module 
│ 
├─ views/ # HTML pages served by the server 
│ ├─ home.html 
│ ├─ about.html 
│ ├─ contact.html 
│ ├─ services.html # Extra route (enhancement) 
│ └─ 404.html # Custom 404 error page 
│ 
└─ public/ 
└─ css/ 
└─ styles.css # Website styling

## 🧠 Key Features

| Feature | Status |
|--------|--------|
| Node.js server using `http` module | ✔ |
| Handles multiple routes | ✔ |
| Serves HTML files | ✔ |
| Serves CSS file | ✔ |
| Custom 404 page | ✔ |
| Modular code (server + router) | ✔ |
| Asynchronous file handling | ✔ |

---

## 🔗 Available Routes

| Route | Description |
|-------|-------------|
| `/` or `/home` | Home page |
| `/about` | About page |
| `/contact` | Contact page |
| `/services` | Additional route (enhancement) |
| ❌ Any other route | Displays custom 404 error page |

---

## 🚀 How to Run the Project

### 1️⃣ Make sure Node.js is installed
Download: https://nodejs.org

### 2️⃣ Navigate to the project folder and run the server
```bash
node server.js
```
### 3️⃣ Open browser and visit the routes
http://localhost:3000/home 
http://localhost:3000/about 
http://localhost:3000/contact 
http://localhost:3000/services 
http://localhost:3000/random   # To test 404 page
