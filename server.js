/**
 * Created by Eric on 11/17/2017.
 */
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var fs = require("fs");
var nodemailer = require("nodemailer");
var xoauth2 = require('xoauth2');
var app = express();

app.use(express.static(path.join(__dirname, "/view")));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post("/email", function(req, res){
    var email = req.body;
    var timestamp = parseInt(email.timestamp);
    var time = myTime(timestamp);
    console.log(email);
    console.log(time);
    var smtpTransporter = nodemailer.createTransport("smtps://occidental_zephyr%40163.com:occidental_@smtp.163.com");

    var mailOptions = {
        from: '"Occidental"<occidental_zephyr@163.com>',
        to: 'occidental_zephyr@163.com',
        subject: 'Sending Email using Node.js',
        html: formatEmail(email, time),
    };
    // transporter.sendMail(mailOptions, function(error, info){
    smtpTransporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
            res.json({
                status: 505,
                message: "Email sending was failed",
            });
        } else {
            console.log('Email sent: ' + info.response);
            res.json({
                status: 200,
                message: info.response,
            });
        }
    });
});

function myTime(){
    var d;
    if (arguments.length > 0) {
        d = new Date(arguments[0]);
    } else {
        d = new Date();
    }
    return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate() + " "
        + (d.getHours() < 10 ? "0" + d.getHours() : d.getHours()) + ":"
        + (d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes()) +
        ":" + (d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds());
}
function formatEmail (email, time) {
    var currentTime = "<p>邮件发送时间: " + time + "</p>";
    var name = "<p>发件人: " + email.name + "</p>";
    var addr;
    if (email.email === undefined || email.email.trim() === "") {
        // addr = email.email;
        addr = "对方未填写";
    } else {
        addr = email.email;
    }
    var emailAddr = "<p>电子邮件地址: " + addr +"</p>";
    var tel = "<p>电话: " + email.tel +"</p>";
    var info = "<p>邮件内容</p><p>" + email.info + "</p>";
    return currentTime + name + emailAddr + tel + info;
}
// console.log(new Date(parseInt("314456700000")).getFullYear());
app.listen(3000, function(){  // 3000, 80端口可能无需域名URL转发
    console.log(myTime() + " server launched successfully \n\r");
});

