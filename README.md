# E-Commerce-Store
Building an E-Commerce Store

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
