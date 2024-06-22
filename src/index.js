import express from "express";
import pool  from "../src/data.js"
const app = express();

app.get("/",(req, res) =>{
 res.send("you have hit the home endpoint")
})

app.listen (3000,() => {
    console.log("Application running on port 3000....")
})
