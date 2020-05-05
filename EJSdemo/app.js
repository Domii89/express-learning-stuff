var express = require("express");
var app = express();


// it will tell Express to serve the content of the "public" directory
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
});

// res.render => sending back the content of a file. Those templates need to exist in 'views' directory. Express automatically looks there
// .ejs => embedded javascript, it's what enables us to have dynamic templates

app.get("/fellinlovewith/:animal", function(req,res){
	var thing = req.params.animal;
	res.render("love", {thingVar: thing}); 
});

app.get("/posts", function(req, res){
	var posts = [
		{title: 'Post 1', author: 'Suzy'},
		{title: 'Post 2', author: 'Charlie'},
		{title: 'Post 3', author: 'Colt'},
	];
	res.render("posts", {posts: posts});
});

app.listen(process.env.PORT || 3000, process.env.IP, function(){
	console.log("Server has started!")
});

