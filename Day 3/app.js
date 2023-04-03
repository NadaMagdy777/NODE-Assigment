let http = require("http");
let helper = require("./customMods");

http
	.createServer((req, res) => {
		let method = req.method;
		let url = req.url;
		let action = helper.Handler.GetUrlAction(url);

		console.log(method);
		console.log(url);
		console.log(action);

		body = "";
		req.on("data", (chunk) => {
			body += chunk.toString();
		});
		req.on("end", () => {
			console.log("Body" + body);
			switch (action) {
				case "login":
					helper.Auth.LogIn(url, method, body, res);
					break;
				case "Register":
					helper.Auth.Register(url, method, body, res);
					break;
				case "home":
					helper.page.getHomePage(res);
					break;
				case "favicon.ico":
					break;
				default:
					helper.page.getErrorPage(res);
					break;
			}
			res.end();
		});
	})
	.listen(3000);
