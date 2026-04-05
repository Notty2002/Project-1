const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>Nilesh DevOps</title>
        <style>
            body {
                margin: 0;
                padding: 0;
                font-family: Arial, sans-serif;
                background: linear-gradient(135deg, #667eea, #764ba2);
                height: 100vh;
                display: flex;
                justify-content: center;
                align-items: center;
                color: white;
            }

            .container {
                text-align: center;
                background: rgba(255, 255, 255, 0.1);
                padding: 40px;
                border-radius: 15px;
                backdrop-filter: blur(10px);
                box-shadow: 0 8px 32px rgba(0,0,0,0.2);
            }

            h1 {
                font-size: 40px;
                margin-bottom: 10px;
            }

            p {
                font-size: 18px;
                color: #f1f1f1;
            }

            .btn {
                margin-top: 20px;
                padding: 10px 20px;
                border: none;
                border-radius: 25px;
                background: #ff7eb3;
                color: white;
                font-size: 16px;
                cursor: pointer;
                transition: 0.3s;
            }

            .btn:hover {
                background: #ff4f81;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>🚀 Hello Nilesh DevOps</h1>
            <p>Welcome to your colorful Node.js application!</p>
            <button class="btn" onclick="alert('Keep Learning DevOps 🔥')">
                Click Me
            </button>
        </div>
    </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
