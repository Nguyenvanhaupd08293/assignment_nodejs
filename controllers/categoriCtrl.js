const db = require('../config/database');

const addListCategory = (req, res) => {
    db.query('SELECT * FROM categories', (error, data, fields) => {
        if (error) throw error;
        res.render('admin/categories/add_listCate', { data });
    });
};

// const postCreateCategory = (req, res) => {
//     console.log(req.body);
//     let nameCategory = req.body.nameCategory;
//     let sttCategory = req.body.categoryNumber;
//     let category = {
//         name_category: nameCategory,
//         stt_category: sttCategory,
//     };
//     db.query('INSERT INTO categories SET ?', category, (err, data) => {
//         if (err) throw err;
//         console.log(req.body);
//         res.redirect('/addList_category');
//     });
// };
const postCreateCategory = (req, res) => {
    console.log(req, res);
    // Kiểm tra xem req.body có tồn tại không
    if (!req.body) {
        return res.status(400).send('Bad Request: No data received 1')
    }

    // Kiểm tra xem req.body có chứa trường nameCategory không
    if (!req.body.nameCategory || !req.body.categoryNumber) {
        return res.status(400).send('Bad Request: Missing nameCategory or categoryNumber field');
    }
    // Lấy dữ liệu từ req.body
    const nameCategory = req.body.nameCategory;
    const sttCategory = req.body.categoryNumber;

    // Tiến hành thêm dữ liệu vào cơ sở dữ liệu hoặc xử lý theo ý của bạn
    db.query('INSERT INTO categories (name_category, stt_category) VALUES (?, ?)', [nameCategory, sttCategory], (err, result) => {
        if (err) {
            console.error('Error inserting category:', err);
            return res.status(500).send('Internal Server Error');
        }
        console.log('Category inserted successfully');
        // Redirect hoặc gửi phản hồi khác tùy thuộc vào logic ứng dụng của bạn
        res.redirect('/addList_category');
    });
};


module.exports = {
    addListCategory,
    postCreateCategory,
};