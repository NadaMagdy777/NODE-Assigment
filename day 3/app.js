var http = require('http');
var fs = require('fs')

http.createServer(function (request, response){

    if(request.url === '/login')
	{
		response.writeHead(200, {'content-type': "text/html"});
		var html = fs.readFileSync('login.html');

        response.write(html)
	}
    else if(request.url === '/signup')
	{
		response.writeHead(200, {'content-type': "text/html"});
		var html = fs.readFileSync('signUp.html');

        response.write(html)
	}
    else if(request.url === '/home' && request.method==='GET')
	{
		response.writeHead(200, {'content-type': "text/html"});
		var html = fs.readFileSync('home.html');

        response.write(html)
	}
    else if(request.url === '/profile')
	{
		response.writeHead(200, {'content-type': "text/html"});
		var html = fs.readFileSync('profile.html');
        
        response.write(html)
	}
	else{
		response.writeHead(200, {'content-type': "text/html"});
		var html = fs.readFileSync('Error.html');
        
        response.write(html)
	}
    response.end();

}).listen(3000);