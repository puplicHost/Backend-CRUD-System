
const express = require("express")
const app = express()
const router = require("./Routers/CoursesRouter")
const UserRouter = require("./Routers/UserRouter")
const port = process.env.port
app.use(express.json())
require('dotenv').config()

// Database
const mongoose = require ("mongoose")
const URI = process.env.URI
mongoose.connect(URI).then(()=>{
    console.log("Database is Connected")
})
// Database

app.use('/' , router)

app.use('/' , UserRouter)




// server port
app.listen(4000, () => {
    console.log("server is running on http://localhost:4000");

})