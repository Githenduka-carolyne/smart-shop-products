import { Router } from "express";
import pool from "../data.js";

const router = Router();

router.get("/" , async (req, res)=>{
    try{
        const result = await pool.query("SELECT * FROM products");
        res.status(200).json({success: true, data:result.rows});
    } catch(error){
        res.status(500).json({success: false, message:err.message})
    }
})

router.get ("/:id", async (req, res)=>{
    const id = req.params.id;
    try{
        const result = await pool.query("SELECT * FROM products WHERE id=$1",[id]);
        if (result.rowCount ===0){
            (res.status(404).json ({success:false, message:err.message})   )
        }else{
            res.status(200).json({success:true,  data:result.rows})
        }
    }catch(error){
        res.status(500).json ({success:false, message:err.message})
    }
    // res.send("getting a single products")
})

router.post ("", (req, res)=>{
    res.send("creating a product")
})

router.patch ("/:id", (req, res)=>{
    res.send("updating a product")
})

router.delete ("/:id", async (req, res)=>{
    const id = req.params.id;
    try{
        const result = await pool.query("SELECT * FROM products WHERE id=$1",[id]);
        if (result.rowCount ===0){
            (res.status(404).json ({success:false, message:err.message})   )
        }else{
            res.status(200).json({success:true,  data:result.rows})
        }
    }catch(error){
        res.status(500).json ({success:false, message:err.message})
    }
    // res.send("getting a single products")
})

export default router;