import { Router } from "express";
import pool from "../data.config.js";

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

router.post("/", async (req, res) => {
  const productthumbnail = req.body.productthumbnail;
  const producttitle = req.body.producttitle;
  const productdescription = req.body.productdescription;
  const productcost = req.body.productcost;
  const onoffer = req.body.onoffer;
  if (!productthumbnail)
    return res
      .status(400)
      .json({ success: false, message: "Productthumbnail required" });
  if (!producttitle)
    return res
      .status(400)
      .json({ success: false, message: "Producttitle required" });
  if (!productdescription)
    return res.status(400).json({
      success: false,
      message: "Productdescription required",
    });
  if (!productcost)
    return res
      .status(400)
      .json({ success: false, message: "Productcost required" });
  if (!onoffer)
    return res
      .status(400)
      .json({ success: false, message: "onoffer required" });
  try {
    const result = await pool.query(
      "INSERT INTO products (productthumbnail, producttitle, productdescription, productcost, onoffer) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [
        productthumbnail,
        producttitle,
        productdescription,
        productcost,
        onoffer,
      ],
    );
    res.status(201).json({ success: true, data: result.rows[0] });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});
router.patch("/:id", async (req, res) => {
  const {
    productthumbnail,
    producttitle,
    productdescription,
    productcost,
    onoffer,
  } = req.body;
  const id = req.params.id;

  try {
    let updateProduct;
    if (productthumbnail) {
      updateProduct = await pool.query(
        "UPDATE products SET productthumbnail=$1 WHERE id=$2",
        [productthumbnail, id],
      );
    }
    if (producttitle) {
      updateProduct = await pool.query(
        "UPDATE products SET producttitle=$1 WHERE id=$2",
        [producttitle, id],
      );
    }
    if (productdescription) {
      updateProduct = await pool.query(
        "UPDATE products SET productdescription=$1 WHERE id=$2",
        [productdescription, id],
      );
    }
    if (productcost) {
      updateProduct = await pool.query(
        "UPDATE products SET productcost=$1 WHERE id=$2",
        [productcost, id],
      );
    }
    if (onoffer) {
      updateProduct = await pool.query(
        "UPDATE products SET onoffer=$1 WHERE id=$2",
        [onoffer, id],
      );
    }
    res.json(updateProduct);
  } catch (error) {
    res.status(500).json({ success: false, message: err.message });
  }
});
router.delete ("/:id", async (req, res)=>{
    const id = req.params.id;
    try{
        const result = await pool.query("DELETE FROM products WHERE id=$1",[id]);
        if (result.rowCount ===1){
            res.status(200).json({success:true,  message:"Product deleted successfully"})
        }else{
           
             (res.status(404).json ({success:false, message:err.message})   )
        }
    }catch(error){
        res.status(500).json ({success:false, message:err.message})
    }
    // res.send("deleting a products")
})

export default router;