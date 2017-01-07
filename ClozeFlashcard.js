function basicFlashcard(text, cloze) {
	this.cardText = text,
	this.cardCloze = cloze,
	this.display = function(){
		console.log("..." + this.cardText);
	}
}