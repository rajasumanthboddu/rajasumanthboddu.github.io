const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();

var tasks = ["Not yet Assigned","Not yet Assigned","Not yet Assigned","Not yet Assigned","Not yet Assigned","Not yet Assigned"];
var assignes = ["Sraavya","Suchitha","Spurthi","Vineeth","Sumanth","Spandana"];
var task;
var assigne;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(request, response){
	if((task && assigne) || (!task && !assigne)){
		task = "";
		assigne = "";
		response.sendFile(__dirname+"/index.html");
	}else{
		response.render("list2", {inputUtterance: task});
	}
});

app.post("/", function(request, response){
	if(request.body.hasOwnProperty("butt2")){
		response.sendFile(__dirname+"/final.html");
		response.render("list3", {code1: tasks[0],code2: tasks[1],code3: tasks[2],code4: tasks[3],code5: tasks[4],code6: tasks[5]});
	}else{
		task = request.body.utterance;
		assigne = request.body.subject;
		if(task && assigne){
			for (let i = 0; i < 6; i++) {
			if(assigne === assignes[i]){
				tasks[i] = task;
				}
			}
			response.sendFile(__dirname+"/final.html");
			response.render("list3", {code1: tasks[0],code2: tasks[1],code3: tasks[2],code4: tasks[3],code5: tasks[4],code6: tasks[5]});
			task = "";
			assigne = "";
		}else{
			response.redirect("/");
		} 
	} 
})

app.listen(3000, function(){
    // console.log("server started on port 3000")
});