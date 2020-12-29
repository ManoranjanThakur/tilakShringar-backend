const express = require('express')
const router = express.Router()
const slugify = require('slugify');
const { requireSignin, adminMiddileware } = require('../common-middleware');
const { addCategory, getCategories, updateCategories, deleteCategories } = require('../controller/category');
const Category = require('../models/category');
const shortid = require('shortid');
const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,path.join(path.dirname(__dirname),'uploads'))
    },
    filename:function(req,file,cb){
        cb(null,shortid.generate()+'-'+ file.originalname)
    }
});
const upload = multer({storage});


router.post('/category/create',requireSignin,adminMiddileware,upload.single('categoryImage'),addCategory)
router.get('/category/getcategory',getCategories)
router.post('/category/update',upload.array('categoryImage'),updateCategories)
router.post('/category/delete',deleteCategories)
module.exports = router;