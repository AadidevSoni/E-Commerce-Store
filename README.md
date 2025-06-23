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

function App() {

  return (
    <>Hello</>
  )
}

export default App

<h2>main.jsx modified to remove:</h2>

import index.jss

<h2>Scripts in package.json:</h2>

"scripts": {
  "backend": "nodemon backend/index.js",
  "frontend": "npm run dev --prefix frontend",
  "dev": "concurrently \"npm run frontend\" \"npm run backend\""
},
