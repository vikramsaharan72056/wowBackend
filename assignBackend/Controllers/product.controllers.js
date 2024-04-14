const Product = require("../models/product.model");


const getAllProducts = async (req,res) =>{
    try{
        
        const products = await Product.find();
        res.status(200).json({data:products});
    }catch(error){
        res.status(500).json({message:error.message});
    }
}

const getProductById = async (req,res) =>{
    const id = req.params.id;
    try{
        const product = await Product.findById(id);
        if(!product){
            return res.status(404).json({
                message:"No product found with given Id"
            })
        }
        res.status(200).json({data:product})

    }catch(error) {
        res.status(500).json({message:error.message});
    }
}

const createProduct = async (req,res) =>{

    const product = req.body;
    console.log(product)
    try{

        const newProduct = await Product.create(product);
        res.status(201).json({data:newProduct});

    }catch(error){
        res.status(500).json({message:error.message});
    }
}


const updateProduct = async (req,res) =>{
    const id = req.params.id;
    console.log(req.params);
    const product = req.body;
    console.log(product);
    try{
        const updatedProduct = await Product.findByIdAndUpdate(id,product);
        if(!updatedProduct){
            res.status(404).json({message:"No Product found with this Id"});
        }
        res.status(200).json({data:updatedProduct});

    }catch(error){
        res.status(500).json({status:"fail",message:error.message});
    }
}

const deleteProduct = async (req,res) =>{
    const id = req.params.id;
    console.log(id);
    try{
        const deletedProduct = await Product.findByIdAndDelete(id);
        if(!deleteProduct){
            return res.status(404).json({message:"No product found with given Id"})
        }
        res.status(201).json({message:"Product deleted Successfully"});

    }catch(error){
        res.status(500).json({message:error.message});
    }
}


const searchProducts = async (req, res) => {
    const searchString = req.query.search;
    console.log("Search query:", req.query);
    try {
        const products = await Product.find({
            $text: { $search: searchString }
        }, { score: { $meta: "textScore" } }).sort({ score: { $meta: "textScore" } });
        console.log("Found products:", products);
        res.status(200).json({ data: products });
    } catch (error) {
        console.error("Search error:", error);
        res.status(500).json({ message: error.message });
    }
};


module.exports = {getAllProducts,getProductById,createProduct,updateProduct,deleteProduct,searchProducts};