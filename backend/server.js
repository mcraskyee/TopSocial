//准备工作
//TopSocial   git init
//.gitignore(node_modules/) backend
//cd backend
//npm init   server.js
//npm i axios cors express json-server
//npm i nodemon concurrently -D

const express = require("express")
const cors = require("cors")
const router = require("./routes/index")
const app = express()

app.use(cors())
app.use(express.json())

app.use("/api",router)

const PORT = 80
app.listen(PORT, function(){
    console.log("server is running on http://localhost:80")
})