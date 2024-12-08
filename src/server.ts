import db from "./config/db";
import colors from 'colors'
import express from 'express'
import cors from 'cors'
import { corsConfig } from './config/cors'
import userRouter from './routers/userRouter'
import workRouter from './routers/workRouter'

//conection DB
async function connectDB() {
    try {
        await db.authenticate()
         db.sync()
        console.log(colors.blue.bold('Conexion exitosa a la base de datos'))
    } catch (error) {
        console.log(error)
        console.log(colors.red.bold('Hubo un error al conectar la BD'))
    }
}
connectDB()

const app = express()

//app.use(cors(corsConfig))

app.use(express.json())

//Routing
app.use('api/user', userRouter)
app.use('api/work', workRouter)


export default app


