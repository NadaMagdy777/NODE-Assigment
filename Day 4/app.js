var express = require('express');
var fs = require('fs');
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	res.render('home');
});
app.get('/login',(req,res)=>{
	res.render('login');
});
app.get('/signUp', (req,res)=>{
	res.render('signUp');
});
app.get('/profile', (req,res)=>{
	res.render('profile', { logged : false });
});

app.post('/login',(req,res)=>{

	var users = GetAllUsers();
	var loggedUser = JSON.parse(JSON.stringify(req.body));  
	var isExist = false;

	for(const user of users){
		if(user.Email == loggedUser.Email && user.Password == loggedUser.Password){
			isExist = true;
			loggedUser = user;
			break;		
		}	
	}
	
	if(isExist){
		res.render('profile', { logged : true , UserName: loggedUser.Name });
		console.log(loggedUser.Name);
	}
	else{
		res.render('login');
	}
});

function GetAllUsers() {

    var users = fs.readFileSync('Users.txt', 'utf8');
    var allUsers = JSON.parse(users) || [];
    
	return allUsers;
}

app.listen(3000);

