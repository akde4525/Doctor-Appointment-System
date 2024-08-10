const express = require('express')
const colors = require('colors')
const morgan = require('morgan')
const dotenv = require('dotenv');
const connectDB = require('./config/db');
// const path = require('path')
// import routes
const userRoutes = require("./routes/userRoutes.js");
const adminRoutes = require("./routes/adminRoutes.js")
const doctorRoutes = require("./routes/doctorRoutes.js")

// dotenv config
dotenv.config();

// mongodb connection
connectDB();

// rest object
const app = express()

// middlewares
app.use(express.json())
app.use(morgan('dev'))

// routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/admin", adminRoutes);
app.use("/api/v1/doctor", doctorRoutes);

// // static files
// app.use(express.static(path.join(__dirname, './client/build')))
// app.get("*", function (req, res) {
//     res.sendFile(path.join(__dirname, "./client/build/index.html"));
// })

// port 
const port = process.env.PORT || 8000;

// listen port 
app.listen(port, ()=> {
    console.log(
        `Server Running in ${process.env.NODE_MODE} Mode On Port ${process.env.PORT}`
        .bgCyan.white
    )
})