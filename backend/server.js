import express from 'express'
import data from './data.js'

const app = express();

app.get("/api/products", (req,res)=>{
    res.send(data.products);
})

app.get("/api/products/:id", (req,res)=>{
    const product = data.products.find((x) => x._id === req.params.id)
    // console.log(product);
    // console.log(req.params.id);
    if(product){
        res.status(200).json({
            success: true,
            message: "successful find product",
            product
        })
    }else{
        res.status(404).json({
            success: false,
            message: 'product not found'
        })
    }
})

app.get('/',(req,res)=>{
    res.send("server running")
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`server running port ${PORT}`);
})