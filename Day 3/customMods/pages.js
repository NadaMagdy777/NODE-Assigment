var fs = require("fs");

function getLoginPage(res) {
	res.writeHead(200, { "content-type": "text/html" });
	var html = fs.readFileSync("./staticPages/login.html");

	res.write(html);
}

function getRegisterPage(res) {
	res.writeHead(200, { "content-type": "text/html" });
	var html = fs.readFileSync("./staticPages/Register.html");

	res.write(html);
}

function getProfilePage(userName, res) {
	res.writeHead(200, { "content-type": "text/html" });
	var html = fs.readFileSync("./staticPages/Profile.html", "utf-8");
	html = html.replace("{UserName}", userName);

	res.write(html);
}

function getErrorPage(res) {
	res.writeHead(200, { "content-type": "text/html" });
	var html = fs.readFileSync("./staticPages/404page.html", "utf-8");

	res.write(html);
}

function getUserNotFound(res) {
	res.writeHead(200, { "content-type": "text/html" });
	var html = fs.readFileSync("./staticPages/UserNotFound.html", "utf-8");

	res.write(html);
}

function getInCorrectPWD(res) {
	res.writeHead(200, { "content-type": "text/html" });
	var html = fs.readFileSync("./staticPages/InCorrectPass.html", "utf-8");

	res.write(html);
}

function getHomePage(res) {
	res.writeHead(200, { "content-type": "text/html" });
	var html = fs.readFileSync("./staticPages/Home.html", "utf-8");

	res.write(html);
}

module.exports = {
    getLoginPage, getRegisterPage, getProfilePage, 
    getErrorPage, getUserNotFound,
    getInCorrectPWD, getHomePage
}