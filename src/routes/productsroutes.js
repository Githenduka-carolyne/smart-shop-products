import { Router } from "express";
import pool from "../data.js";

const router = Router();

router.get("/" , async (req, res)=>{
    try{
        const result = await pool.query("SELECT * FROM products");
        res.json(result);
    } catch(error){
        res.status(500).json({success: false, message:err.message})
    }
})

router.get ("/:id", (req, res)=>{
    res.send("getting a single products")
})

router.post ("", (req, res)=>{
    res.send("creating a product")
})

router.patch ("/:id", (req, res)=>{
    res.send("updating a product")
})

router.delete("/:id", (req, res)=>{
    res.send("deleting a product")
})

export default router;