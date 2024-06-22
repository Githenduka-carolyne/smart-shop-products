import express from "express";
import productsrouters from "./routes/products.routes.js";
const app = express();
app.use(express.json());
app.use("/products", productsrouters);



app.get("/products",(req, res) =>{
 res.send("you have hit the product endpoint")
})

app.listen (3000,() => {
    console.log("Application running on port 3000....")
})
