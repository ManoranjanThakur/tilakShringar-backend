const express =  require('express');
//const { initialData } = require('../../controller/admin/initialData');
const { route } = require('./auth')
const router = express.Router()
const {initialData} = require('../../controller/admin/initialData')

router.post('/initialdata', initialData)
module.exports = router;
