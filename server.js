var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'mockup')));

app.listen(52273, function () {
    console.log('Server running at http:// 127.0.0.1:52273')
});