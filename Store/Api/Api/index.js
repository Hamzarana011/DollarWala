const express = require("express");
const app=express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const cors = require("cors");

const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");



dotenv.config();

const DB = 'mongodb+srv://hasnan:hasnan023@cluster0.tugsl7l.mongodb.net/Ecommerce?retryWrites=true&w=majority';

app.use(cors());

mongoose.connect(DB,{}).then(()=>{
    console.log("connection successful");
}).catch((err)=>console.log("no connection"));

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);


app.listen(5000, ()=>{
    console.log("backened is running");
});