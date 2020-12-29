
const express = require('express');
const {createProduct,getProductsBySlug,getProductDetailsById} = require('../controller/product');
const multer = require('multer');
const shortid = require('shortid');
const path = require('path');
const { requireSignin, adminMiddileware } = require('../common-middleware');
const router = express.Router()

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,path.join(path.dirname(__dirname),'uploads'))
    },
    filename:function(req,file,cb){
        cb(null,shortid.generate()+'-'+ file.originalname)
    }
})


const upload = multer({storage})
router.post('/product/create',requireSignin,adminMiddileware, upload.array('productPicture'),createProduct);
router.get('/products/:slug',getProductsBySlug)
router.get('/product/:productId',getProductDetailsById)

module.exports = router