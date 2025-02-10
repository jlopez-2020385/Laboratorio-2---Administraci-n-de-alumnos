"use strict"
 
import express from "express"
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan"
import { dbConnection } from "./mongo.js"
import authRoutes from "../src/auth/auth.routes.js"
import userRoutes from "../src/user/user.routes.js"
import userTeacherRoutes from "../src/user_teacher/user.routes.js"
import courseRoutes from "../src/course/course.routes.js"
import assignmentRoutes from "../src/assignment/assignment.routes.js"
import apiLimiter from "../src/middlewares/validar-cant-peticiones.js"



 
const middlewares = (app) => {
    app.use(express.urlencoded({extended: false}))
    app.use(express.json())
    app.use(cors())
    app.use (helmet())
    app.use(morgan("dev"))
    app.use(apiLimiter)
}

const routes = (app) => {
    app.use("/administracion/v1/auth", authRoutes)
    app.use("/administracion/v1/userStudent" , userRoutes)
    app.use("/administracion/v1/userTeacher",userTeacherRoutes)
    app.use("/administracion/v1/course",courseRoutes)
    app.use("/administracion/v1/assignment",assignmentRoutes)
}

const conectarDB = async () =>{
    try{
        await dbConnection()
    }catch(err){
        console.log(`Database connection failed: ${err}`)
        process.exit(1)
    }
}
 
export const initServer = () => {
    const app = express()
    try{
        middlewares(app)
        conectarDB()
        routes(app)
        app.listen(process.env.PORT)
        console.log(`server running on port ${process.env.PORT}`)
    }catch(err){
        console.log(`server init failed: ${err}`)
    }
}