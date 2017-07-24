function CloseCard(text, cloze){

	var textToLower = text.toLowerCase();
	var clozeToLower = cloze.toLowerCase();

	if(!textToLower.include(clozeToLower)){
		console.log('Error', cloze);
		return;
	}
	else if (this instanceof CloseCard){
	this.full = text;
	this.close = cloze;
	this.partial = text.replace(cloze, '...')
	}else {
		return new ClozeCard(text, cloze);

}

module.exports = ClozeCard;