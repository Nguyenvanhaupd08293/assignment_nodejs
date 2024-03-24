const path = require("path");
const express = require('express');
var multer = require('multer');

const configViewEngine = (app) => {
    app.set("view engine", "ejs");
    path.join()
    app.set("views", path.join('./', 'views'));
    app.use(express.static("public"));
    app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));
    app.use("/js", express.static(__dirname + "/node_modules/bootstrap/dist/js"));

}
module.exports = configViewEngine;