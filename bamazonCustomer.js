const mysql = require('mysql');
const inquirer = require('inquirer');

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Caldavid#3227",
  database: "bamazon_db"
});

connection.connect(function(err) {
	if (err) throw err;
	runSearch();
});

function runSearch() {
const questions = [{
	type: 'input',
	name: 'id',
	message: 'What item(s) are you looking to buy?'
}, {
	type: 'input',
	name: 'id',
	message: 'How many would you like?'
}];

inquirer.prompt(questions);
}	

