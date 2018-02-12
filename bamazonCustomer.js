const inquirer = require('inquirer');

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

