import express from "express";
import productsrouters from "../src/routes/productsroutes.js";
const app = express();

app.use("/products", productsrouters);

app.get("/",(req, res) =>{
 res.send("you have hit the product endpoint")
})

app.listen (3000,() => {
    console.log("Application running on port 3000....")
})
