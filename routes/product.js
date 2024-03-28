const express = require('express');
const router = express.Router();
const { getHomePage } = require('../controllers/homController');
const { getListProduct, getProduct, formProduct, postCreateProduct, formUpdate, updateProduct, deleteProduct } = require('../controllers/productCtrl')
    // router.get('/', getHomePage);
router.get('/', getProduct);
router.get('/addproduct', getListProduct);
router.get('/addproduct', formProduct);
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/images'); // Lưu trữ tập tin vào thư mục 'uploads'
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname); // Đổi tên tập tin thành một tên duy nhất
    },
});

// Tạo middleware multer
const upload = multer({ storage: storage });
router.post('/creatPro', upload.single('imgProduct'), postCreateProduct);
router.get('/updateProduct/:id', formUpdate);
router.post('/updateProduct/:id', upload.single('imgProduct'), updateProduct);
router.get('/delete/:id', deleteProduct);
module.exports = router;