import express from "express"
import dotenv from "dotenv"
import morgan from "morgan";
import connectDB from './config/db.js'
import authRoute from './routes/authRoute.js'
import categoryRoutes from "./routes/CategoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";

import cors from "cors"
//rest object
const app = express();

//config env
dotenv.config();//incase of root folder no need to define the path
connectDB();

//middlewares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use("/api/v1/auth",authRoute);
app.use("/api/v1/category",categoryRoutes);
app.use("/api/v1/product",productRoutes);

//rest api
app.get("/", (req, res) => {
    res.send({
        msg: "Welcome to app"
    })
})

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})