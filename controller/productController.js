const Product = require("../models/productModel");

exports.getAllProducts = async (req, res)=> {
    try {
        const product = await Product.find();
        res.status(200).json({product})
    } catch (error) {
        res.status(401).json({message: error.message})
    }
}
exports.postProduct = async (req, res)=>{
    try {
        const {name, description, img, price, catagory} = req.body;
        const product = await Product.create({
            name,
            description,
            img,
            price,
            catagory,
        })
        
        res.status(200).json({message: `created new product which id ${product._id}`})
    } catch (error) {
        res.status(401).json({message: error.message})
    } 
};

exports.removeProduct = async (req, res)=> {

    try {        
        const id = await req.params.id;
        console.log(id);
        const result = await Product.findByIdAndDelete({_id:id})
        // const result = await Product.deleteOne({_id:id})

        res.status(200).json({message:result.message})
    } catch (error) {
        res.status(401).json({message: error.message})
    }

    // const id = await req.params.id;
    
    // res.send(`respons from remove item ${id}`)

}

exports.getProduct = async (req, res)=>{

    try {
        const id = req.params.id;

        const product = await Product.findById({_id:id});
    
        if(!product){
            return res.status(401).json({message: "Something Wents Wrong"})
        }
        res.status(200).json({product})
    } catch (error) {
        res.status(402).json({message:error.message})
    }
}

// module.exports = {
//     getAllProducts,
//     postProduct,
//     removeProduct,
// };