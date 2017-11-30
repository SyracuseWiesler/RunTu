/**
 * Created by Eric on 11/17/2017.
 */
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var fs = require("fs");
var app = express();

app.use(express.static(path.join(__dirname, "/view")));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

function myTime(){
    var d = new Date();
    return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate() + " "
        + (d.getHours() < 10 ? "0" + d.getHours() : d.getHours()) + ":"
        + (d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes()) +
        ":" + (d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds());
}
app.listen(8888, function(){
    console.log(myTime() + " server launched successfully \n\r");
});

