const db = require('../config/database');
const formProduct = (req, res) => res.render('admin/product/add_product');
const getProduct = (req, res) => {
    const limit = 4;
    const page = req.query.page ? parseInt(req.query.page) : 1;
    const offset = (page - 1) * limit || 0;

    db.query(`SELECT COUNT(*) as sl FROM products`, (error, data) => {
        const totalProduct = data[0].sl;
        const totalPage = Math.ceil(totalProduct / limit);
        db.query('SELECT * FROM products LIMIT ? OFFSET ? ', [limit, offset], (error, data, fields) => {
            if (error) throw error;
            res.render('main', { data, page, totalPage });
        });
    });
};

const getListProduct = (req, res) => {
    db.query('SELECT * FROM products', (error, data, fields) => {
        if (error) throw error;
        res.render('admin/product/add_product', { data });
    });
};
const postCreateProduct = (req, res) => {
    const file = req.file
    let title = req.body.nameProduct;
    let price = req.body.priceProduct;
    let description = req.body.txtdesc;
    let nameImage = file.filename;
    let nameImage1 = file.filename;
    let product = {
        title: title,
        price: price,
        description: description,
        imageURL: nameImage,
        imageURL1: nameImage1,
    }
    db.query('insert into products SET ?', product, (err, data) => {
        if (err) throw err;
        res.redirect('/addproduct');
    })

};
/// sửa product
const formUpdate = (req, res) => {
    const id = +req.params.id;
    db.query(`SELECT * FROM products WHERE id = ${id}`, (error, data) => {
        if (error) throw error;
        res.render('updateProduct', { data });
    });
};

const updateProduct = (req, res) => {
    const id = +req.params.id;
    let title = req.body.nameProduct;
    let price = req.body.priceProduct;
    let description = req.body.txtdesc;
    let nameImage = "images/" + req.file.filename;


    db.query(
        'UPDATE products SET title=?, price=?, description=?, imageURL=? WHERE id = ?', [title, +price, description, nameImage, id],
        (error, data) => {
            if (error) throw error;
            res.redirect('/listProduct');
        }
    );
};
//xóa product

const deleteProduct = (req, res) => {
    const id = req.params.id;
    db.query('DELETE FROM products WHERE id = ? ', id, (error, data) => {
        if (error) throw error;
        res.redirect('/listproduct');
    });
};

module.exports = {
    formProduct,
    getProduct,
    getListProduct,
    postCreateProduct,
    formUpdate,
    updateProduct,
    deleteProduct,
};