const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const configViewEngine = require('./config/viewEngine')
const webRouter = require('./routes/web');
//khai bao sử dụng template Engine
configViewEngine(app);
//khai bao Router
app.use('/', webRouter);
// Sử dụng body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//
app.use(bodyParser.urlencoded());

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});