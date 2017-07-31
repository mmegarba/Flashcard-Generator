var ClozeCard = function(text, cloze) {
	this.fullText = text
    this.partial = text.split(cloze);
    this.cloze = cloze;

};

	


var test = new ClozeCard("George Washington Was the first US prez", "George Washington")



console.log(test.partial)
console.log(test.cloze)
	
module.exports = ClozeCard; 