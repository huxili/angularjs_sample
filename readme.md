# Node.js Application Debugging tutorial

## Introduction
	
With the sample project in this tutorial you will quickly learn how to debug Node.js applications.
	
## Prerequisites

This tutorial requires:
* an installed Node.js
* any web browser
		
## Setup
	
First, you need to launch the Webclipse-JSDebug-NodeJS-Example project as a Node.js application:

1. Right-click on the server.js file in Webclipse-JSDebug-NodeJS-Example project and 
   select Debug As>Standalone Node.js Application. Server.js is the entry point for 
   our example web server
		   
2. Once the application is started and you see
		
	Server Listening - http://localhost:8080/ [development environment]

   you can open your favorite browser and point to localhost:8080.
   
   If you see the following error
   
	Error: listen EADDRINUSE
   
   it means that some other server is running and occupies the port. You need to either terminate
   the other server or change port number in config/development.js file. 
		
3. Follow the instructions on the page displayed in the browser to 
   interactively step through this tutorial.  
    - Remember that after each save of a JavaScript file, you need to stop the server by terminating
      the process and start it over again. Hot-reload of JavaScript code is coming soon.

## Credits

This tutorial project is based on the "Website/Web Service template in Node.js" 
(https://github.com/oren/node-website-template) by Oren Golan.
