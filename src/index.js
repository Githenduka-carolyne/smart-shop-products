import express from "express";
const app = express();

app.get("/",(req, res) =>{
 res.send("you have hit the home endpoint")
})

app.listen (3000,() => {
    console.log("Application running on port 3000....")
})
