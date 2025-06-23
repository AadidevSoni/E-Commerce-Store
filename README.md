# E-Commerce-Store
<h1>Building an E-Commerce Store</h1>

<h1>Setup:</h1>

<h2>Install tailwindcss using vite inside frontend folder:</h2>

<ul>
  <li>Open the folder with terminal and run:</li>
  <li>npm create vite@latest frontend -- --template react</li>
</ul>
<h2>Then, to install all dependencies:</h2>

<ul>
  <li>cd frontend</li>
  <li>npm i </li>
</ul>

<p>Now, Open folder in VS Code and you will have all dependencies in frontend folder</p>
<p>npm init -y to initialize your project in main folder</p>
<p>Create backend folder</p>

<h2>Installing every dependencies for backend:</h2>
<h3>npm i nodemon multer mongoose jsonwebtoken express-formidable express-async-handler express dotenv cors cookie-parser concurrently bcryptjs</h3>

<h2>Installing every dependencies for frontend:</h2>
<p>cd frontend </p>
<h3>npm i slick-carousel react-slick react-toastify react-router react-router-dom react-redux react-icons apexcharts rea
ct-apexcharts moment flowbite axios @reduxjs/toolkit @paypal/react-paypal-js</h3>

<h2>CLEANUP:</h2>
frontend - public , src > assets , App.css , index.css 

<h2>App.jsx modified to:</h2>

<p>function App() {

  return (
    <>Hello</>
  )
}</p>

export default App

<h2>main.jsx modified to remove:</h2>

import index.jss

<h2>Scripts in package.json:</h2>

"scripts": {
  "backend": "nodemon backend/index.js",
  "frontend": "npm run dev --prefix frontend",
  "dev": "concurrently \"npm run frontend\" \"npm run backend\""
},

backend folder creation:
config
contollers
middlewares
models
routes
utils
index.js

On running npm run backend, whatever is in the index.js runs
To run the front end, we write npm run frontend

Creating db.js in config aqnd connecting it to MongoDB
Creating .env with port and URI and using it in db.js
Adding "type":"module" to package.json

Importing all packages and utiles and running the app and listening to the port

POSTMAN
Open Postman and add a blank collect new Request and add http://localhost:8000/ and SEND to see if the backend works

Download Tailwindcss as per:
https://tailwindcss.com/docs/installation/using-vite

Do all necessary commands and create an index.css and tailwind in App.jsx and dont forget to import './index.css'; in main.jsx
