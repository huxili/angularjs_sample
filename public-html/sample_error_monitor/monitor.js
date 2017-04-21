window.onerror = function (message, source, lineno, colno, error) {
	console.log("*****************Error start************************")
	console.log("source: " + source); 
	console.log("line/column: " + lineno + "/" + colno); 
	console.log("message: " + message); 
	console.log("error: " + error); 
	console.log("*****************Error end************************")
}