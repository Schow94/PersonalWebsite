var bodyParser = require("body-parser"), 
    //mongoose   = require("mongoose"),
    express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser");
    
    
//mongoose.connect("mongodb://localhost:27017/personalwebsite", {newUrlParser:true});
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

//INDEX
app.get("/", function(req, res){
   res.render("index");
});

// //EDUCATION
// app.get("/education", function(req, res){
//     res.render("education");
// });
// //WORK
// app.get("/work", function(req, res){
//     res.render("work");
// });

// // PROJECTS
// app.get("/projects", function(req, res){
//     res.render("projects");
// });

// //PHOTOGRAPHY
// app.get("/photography", function(req, res){
//     res.render("photography");
// });

// // CODING
// app.get("/coding", function(req, res){
//     res.render("coding");
// });

// //CONTACT ME
// app.get("/contactme", function(req, res){
//     res.render("contactme");
// });




app.listen(process.env.PORT, process.env.IP, function(){
    console.log("SERVER IS RUNNING!!!");
});

