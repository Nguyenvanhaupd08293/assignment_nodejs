const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const configViewEngine = require('./config/viewEngine')
    // const productRouter = require('./routes/product');
const categoryRouter = require('./routes/category');
console.log('categoryRouter', categoryRouter)
    //khai bao Router
    // Sử dụng productRouter cho tất cả các tuyến đường bắt đầu với '/products'
    // app.use('/', productRouter);
    // Sử dụng categoryRouter cho tất cả các tuyến đường bắt đầu với '/categories'
app.use('/', categoryRouter);
//khai bao sử dụng template Engine
configViewEngine(app);
// Sử dụng body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//
app.use(bodyParser.urlencoded());

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});