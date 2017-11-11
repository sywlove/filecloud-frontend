var http = require('http');
var fs = require('fs');
path = require('path');

fs.writeFile('test.json','hello world!',function (err) {
    if (err) {
        return console.log(err);
    }
    console.log("OK");
});