const express = require('express');
const router = express.Router();
const { addListCategory, postCreateCategory } = require('../controllers/categoriCtrl');
router.get('/addList_category', addListCategory);
router.post('/createCategory', postCreateCategory);
module.exports = router;