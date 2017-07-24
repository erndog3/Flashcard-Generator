var inquire = require('inquirer');
var BasicCard = require('./BasicCard');
var ClozeCard = require('./ClozeCard');
var questions = require('./questions');
var command = process.argv[2];


function command(){
	case basic:
	BasicCard();
	break;
	case cloze:
	ClozeCard();
	break;
}

