# E-Commerce-Store
<h1>Building an E-Commerce Store</h1>

Setup:

Install tailwindcss using vite inside frontend folder:

Open the folder with terminal and run:
npm create vite@latest frontend -- --template react
then to install all dependencies:
cd frontend
npm i 
Now, Open folder in VS Code and you will have all dependencies in frontend folder

npm init -y to initialize your project in main folder

Create backend folder

Installing every dependencies for backend:
npm i nodemon multer mongoose jsonwebtoken express-formidable express-async-handler express dotenv cors cookie-parser concurrently bcryptjs

Installing every dependencies for frontend:
cd frontend 
npm i slick-carousel react-slick react-toastify react-router react-router-dom react-redux react-icons apexcharts rea
ct-apexcharts moment flowbite axios @reduxjs/toolkit @paypal/react-paypal-js

CLEANUP:
frontend - public , src > assets , App.css , index.css 

App.jsx modified to:

function App() {

  return (
    <>Hello</>
  )
}

export default App

main.jsx modified to remove:

import index.jss

Scripts in package.json:

"scripts": {
  "backend": "nodemon backend/index.js",
  "frontend": "npm run dev --prefix frontend",
  "dev": "concurrently \"npm run frontend\" \"npm run backend\""
},
