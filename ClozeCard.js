function CloseCard(text, cloze){

	var textToLower = text.toLowerCase();
	var clozeToLower = cloze.toLowerCase();

	if(!textToLower.include(clozeToLower)){
		console.log('Error', cloze);
		return;
	}
	this.full = text;
	this.close = cloze;
	this.partial = text.replace(cloze, '...');

}

module.exports = ClozeCard;