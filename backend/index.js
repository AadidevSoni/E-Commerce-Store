//packages
import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

//Utiles
import connectDB from './config/db.js'
import userRoutes from './routes/userRoutes.js'

//dotenv: Loads environment variables from .env into process.env.
dotenv.config()
const port = process.env.PORT || 8000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
/*express.json(): Parses incoming JSON request bodies (e.g., for APIs).
express.urlencoded(): Parses form data (from HTML forms).
cookieParser(): Parses cookie headers (e.g., for sessions or JWTs stored in cookies).*/

app.use('/api/users',userRoutes);

app.listen(port, () => console.log("Server running on port " + port));