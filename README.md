# 🌐 Simple Web Server using Node.js (HTTP Module)

## 📌 Overview
This project demonstrates how to build a basic web server in Node.js using the built-in `http` module — without using frameworks like Express.  
It supports multiple routes, serves HTML + CSS files, and includes a custom 404 page.

The server is modular, uses asynchronous file handling, and shows how routing works at a low level in Node.js.

---

## 📁 Project Structure
simple-node-server/
│  
├─ server.js   
├─ router.js  
│  
├─ views/  
│ ├─ home.html  
│ ├─ about.html  
│ ├─ contact.html  
│ ├─ services.html  
│ └─ 404.html  
│  
└─ public/  
└─ css/  
└─ styles.css

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

  


## Route Pages Screenshots  

### Home Page
<img width="1919" height="1025" alt="image" src="https://github.com/user-attachments/assets/ca0a31c4-c2ce-4fbd-8d5b-72751ea73d50" />  

### About Page  
<img width="1917" height="1028" alt="image" src="https://github.com/user-attachments/assets/f830cc7b-0f82-4839-93c1-a5a7a09d3dc5" />  

### Services Page  
<img width="1919" height="1028" alt="image" src="https://github.com/user-attachments/assets/70158229-4def-4e09-a2f7-9a78a9b0eb4e" />  

### Contacts Page  
<img width="1919" height="930" alt="image" src="https://github.com/user-attachments/assets/95e280ea-1e53-45aa-8d9d-3081ccfe759b" />  

## Terminal Screenshot  
<img width="1643" height="491" alt="image" src="https://github.com/user-attachments/assets/90492f6d-b460-4cec-8277-0396f826c92d" />





