import express from 'express'
import dotenv  from "dotenv"
import connectDb from './config/db.js'
import todoRoutes from './routes/todoRoutes.js'
dotenv.config()
const app = express()
app.use(express.json())
connectDb()
app.use('/task',todoRoutes)
app.listen(3001,()=> {
    console.log("server running on port 3001")
})