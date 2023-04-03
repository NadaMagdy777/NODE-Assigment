let urlHandler = require("./Handler");
var fs = require("fs");
var pages = require("./pages");
var dbPath = "./DB/User.txt";

function LogIn(url, method, body, res) {
	switch (method) {
		case "GET":
			pages.getLoginPage(res);
			break;
		case "POST":
			VerifyUser(url, body, res);
			break;
		default:
			pages.getErrorPage(res);
			break;
	}
}

function Register(url, method, body, res) {
	switch (method) {
		case "GET":
			pages.getRegisterPage(res);
			break;
		case "POST":
			SaveNewUserDetails(body, res);
			break;
		default:
			pages.getErrorPage(res);
			break;
	}
}

function SaveNewUserDetails(body, res) {
	let obj = urlHandler.ConvertBodyToObj(body);
	SaveData(obj, res);
}

function FindUser(user, usersList) {
	let stillProcess = true;
	let verfication = {
		isExists: false,
		isVerified: false,
	};

	usersList.forEach((ele) => {
		if (stillProcess) {
			if (ele.User == user.User) {
				verfication.isExists = true;
				if (ele.PWD == user.PWD) {
					verfication.isVerified = true;
					stillProcess = false;
				}
			}
		}
	});

	return verfication;
}

function VerifyUser(url, body, res) {
	let obj = urlHandler.ConvertBodyToObj(body);
	IdentifyUser(obj, res);
}

function SaveData(user, res) {
	let userName = user.User;
	if (!fs.existsSync(dbPath)) {
		user.id = 1;

		fs.writeFileSync(dbPath, JSON.stringify([]));
		let usersList = fs.readFileSync(dbPath, "utf-8");

		usersList = JSON.parse(usersList);
		usersList.push(user);
		usersList = JSON.stringify(usersList);

		fs.writeFileSync(dbPath, usersList);
	} else {
		let users = fs.readFileSync(dbPath, "utf-8");

		let usersList = JSON.parse(users);
		if (usersList.length == 0) {
			user.id = 1;
		} else {
			user.id = usersList[usersList.length - 1].id + 1;
		}
		usersList.push(user);
		usersList = JSON.stringify(usersList);

		fs.writeFileSync(dbPath, usersList);
	}
	pages.getProfilePage(userName, res);
}

function IdentifyUser(user, res) {
	let userName = user.User;
	if (!fs.existsSync(dbPath)) {
		pages.getErrorPage(res);
		return;
	}
	let users = fs.readFileSync(dbPath, "utf-8");
	let usersList = JSON.parse(users);

	if (usersList.length == 0) {
		pages.getErrorPage(res);
		return;
	}

	let verfication = FindUser(user, usersList);
	if (!verfication.isExists) {
		pages.getUserNotFound(res);
	} else if (verfication.isExists && verfication.isVerified) {
		pages.getProfilePage(userName, res);
		return;
	} else {
		pages.getInCorrectPWD(res);
		return;
	}
}

module.exports = {
	LogIn,
	Register,
};
