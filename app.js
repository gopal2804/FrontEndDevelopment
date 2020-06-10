var express=require("express");
var app=express();
var bodyparser=require("body-parser");

app.use(bodyparser.urlencoded({extended: true}));
app.set("view engine","ejs");
app.use(express.static("public"));




app.get("/",function(req,res){
	res.render("index");
});

app.get("/html",function(req,res){
	res.render("html");
});

app.get("/css",function(req,res){
	res.render("css");
});

app.get("/javascript",function(req,res){
	res.render("js");
});
app.listen(1000,function(){
	console.log("!!!server connected!!!");
});