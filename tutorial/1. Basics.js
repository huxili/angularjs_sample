'use strict';

module.exports = function(data) {
	var json = require("./utils.js").readJSON(__dirname + "/sections.json")
	//1. Field data.basics should contain string ".basicsSection" for this part of tutorial to be
	//   finished
	//2. Now that we have hit a breakpoint, we will use the following commands to control the execution:   
	//   Step Into (F5), Step Over (F6), Step Out (F7) and Continue (F8).
	//   Let's get started!
	//3. Let's use Step Into (F5) to enter the processJson() function call.
	data.basics = processJson(json)
	//5. Use Step Over (F6) until you get to line 14 [return]. 
	console.log(data)
	return
	//6. You can notice the output in the console. That's the most common way to debug Node.js code, 
	//   however from now on, you can debug your apps in a smarter way. Just hover over the data 
	//   variable in the code and inspect it's fields, especially the basics field.
	//7. You'll notice a spelling error, basics field should equal to ".basicsS*e*ction".
	//   Correct the string in processJson function on line 27 and save the file.
	//   You can press Continue (F8) to finish code execute and load the page in browser.
	//8. Now you have to terminate the server process and launch it again to see the changes live. 
	//   Don't worry! We are working on providing hot-reload for Node.js and if you are interested 
	//   in that feature, please vote: http://feedback.genuitec.com/forums/309487-webclipse-suggestions
	
	function processJson(json) {
		//4. Now use Step Out (F7) to return from the function immediately. This will 
		//   execute all lines of code until after the function returns.
		var result = json.basics + "Saction"
		return result
	} 
}