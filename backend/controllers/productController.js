import cloudinary from "../config/cloudinary.js"

// Function for add product
const addProduct = async (req, res) => {
    try {
        const {name, description, price, category, subCategory, sizes, bestseller} = req.body;
        const image1 = req.files.image1 && req.files.image1[0];
        const image2 = req.files.image2 && req.files.image2[0];
        const image3 = req.files.image3 && req.files.image3[0];
        const image4 = req.files.image4 && req.files.image4[0];

        const images = [image1, image2, image3, image4].filter((item)=> item !== undefined)

        let imagesURL = await Promise.all(images.map(async (item) => {
            let result = await cloudinary.uploader.upload(item.path, {resource_type: "image"})
            return result.secure_url
        }))

        console.log(name, description, price, category, subCategory, sizes, bestseller);
        console.log(imagesURL);

        res.json({})
    } catch (error) {
        console.log(error);
        res.json({success: false,message: error.message});
    }
}

// Function for list product
const listProduct = async (req, res) => {}

// Function for removing product
const removeProduct = async (req, res) => {}

// Function for single product
const singleProduct = async (req, res) => {}

export {addProduct, listProduct, removeProduct, singleProduct};