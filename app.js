console.log("web serverni boshlash");
const { Console } = require("console");
const express = require("express");
const app = express();
const fs = require("fs");


let user;
fs.readFile("database/user.json", "utf8",(err, data) => {
    if(err) {
        console.log("ERROR", err);
    } else {
        user = JSON.parse(data)
    }
});

//MongoDB connect
const db = require("./server").db();
const mongodb = require("mongodb");

// 1 => Kirish code
app.use(express.static("public")); //=> har qanday browserdan kirib kelayotgan sorovnomalar uchun faqat  public folder ochiq  
app.use(express.json()); // => kirib kelayotgan json formatdagi data object holatga ozgartirib beradi
app.use(express.urlencoded({extended: true})); // => htmldan traditional request (form) larni qabul qiladi

// 2 => Session code

// 3 Views code (backendda frontend yasash)
app.set("views", "views");
app.set("view engine", "ejs");


// 4 Routing code
// app.get("/hello", function(req, res) {
//         res.end("<h1 style='background: red'>HELLO WORLD by Oychehra</h1>");
// });

// app.get("/gift", function(req, res) {
//     res.end("<h1 style='color: blue'>You are at gifts page</h1>");
// });
app.post("/create-item", (req, res) => {
    console.log("user entered /create-item");
    console.log(req.body);
    // res.json({test: "success"});
    // res.end("success");
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
       console.log(data.ops);
        res.json(data.ops[0]);
    });
});

app.post("/delete-item", (req, res) => {
    const id = req.body.id;
    db.collection("plans").deleteOne({_id: new mongodb.ObjectId(id)}, 
    function(err, data){
        res.json({state: "success"});
    })

});

app.post("/edit-item", (req, res) => {
    const data = req.body; 
    console.log(data); 
    db.collection("plans").findOneAndUpdate(
        { _id: new mongodb.ObjectId(data.id) }, 
        { $set: { reja:data.new_input }}, 
        function (err, data){
            res.json({state: "sucess"})

    })
    // res.end("done");  

}); 

app.get("/author", (req, res) => {
   res.render("author", {user: user});
});

app.get('/', function(red, res) {
    console.log("user entered /");
    db.collection("plans")
    .find()
    .toArray((err, data) => {
        if(err) {
            console.log(err);
            res.end("something went wrong");
        } else{
            // console.log(data);
            res.render("reja", {items: data});
        }
    })
});


module.exports = app;

