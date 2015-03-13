var replies = [ "moo moo!", "moodle", "moodle...", "m-mm-mmmoo?", ":D moodle moodle moo!", "moo",	"moo-moo", "<'.__.'>", ":v", "CHOMP!", "kekeke", "kikiki xD", "moodle moodle moo!", "mmmm", "merp",	"...", "merk :v", "mmmmmm.... mmmm... moo?", "moomoo?", "meh meh mehmoodle", "D< moodle moodle moodle moodle", "moodou~~", "merdddddllleee", "mehmeh moodle :v", "mooooooodddddlllllleeeee", "zzz", "ZZZ", "MOOMOO", "MOODLE", "D< MOODLE", "*gasp*  :o moodle?", "*rolls* ._.", ";-; moomoo", "*nod*", "*drinks tears* :P", "moo MOODLE", "moodlini", "<3", "m'moodlini m'moodlini, moodle moodle moodle moo~", "moodle-moodle-moodle-moodle, moo,dle moo,dle", "*wind blows through fur*", "D: *stuffing falls out of head*", "*checks reflection* :30", "*roll* < < ... > > *roll*", "*scent of doritos on sweat fills air* .----.", "m'yaaaaasssssssss"];

function output() {
	post();
	setTimeout(function(){ reply(); }, 1000);
}
function post(){
	var outs = document.getElementById('output');
	var ins = document.getElementById('texts');
	outs.innerHTML += "<p>Me: " + ins.value + "</p>";
	ins.value = "";	
	outs.scrollTop = outs.scrollHeight;	
}
function reply(){
	var outs = document.getElementById('output');
	var ins = document.getElementById('texts');
		outs.innerHTML += "<p class='moobot'>MooBot: " + replies[Math.floor((Math.random() * (replies.length -1)))] + "</p>";
		outs.scrollTop = outs.scrollHeight;
		ins.focus();
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

function clears() {
	var ins = document.getElementById('texts');
	ins.onkeypress = function(e) {
		if(e.keyCode == 13) {
			e.preventDefault();
			output();
		}
	}
	ins.value = "";
	ins.focus();
}
