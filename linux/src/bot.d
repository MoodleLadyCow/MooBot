import std.stdio;
import std.random;
import core.thread;

void main()
{
	string[] replies = [ "moo moo!", "moodle", "moodle...", "m-mm-mmmoo?", ":D moodle moodle moo!", "moo"
		"moo-moo", "<'.__.'>", ":v", "CHOMP!", "kekeke", "kikiki xD", "moodle moodle moo!", "mmmm", "merp",
		"...", "merk :v", "mmmmmm.... mmmm... moo?", "moomoo?", "meh meh mehmoodle", "D< moodle moodle moodle moodle",
		"moodou~~", "merdddddllleee", "mehmeh moodle :v", "mooooooodddddlllllleeeee", "zzz", "ZZZ", "MOOMOO", 
		"MOODLE", "D< MOODLE", "*gasp*  :o moodle?", "*rolls* ._.", ";-; moomoo", "*nod*", "*drinks tears* :P"];
		/*["*nod nod*", "Yeah-huh", "mmhmm", "...if you say so", "Wait, what?", "so then...",
		"What are you trying to say?", ".________.;", "yaasssssssss"];*/
	string line = "";
	string colour1 = "\033[00;37m";
	string colour2 = "\033[01;33m";
	writeln(colour2 ~ "MooBot: moodle!? :O" ~ colour1);
	while(true){
		write("Me: ");
		line = readln();
		switch (line)
		{
		case "quit\n": 
			return;
		case "<>\n":
			string colour3 = colour2;
			colour2 = colour1;
			colour1 = colour3;
			write(colour1);
			break;
		default:
			int reply = uniform(0, cast(int)replies.length-1);
			Thread.sleep(500.msecs);
			write(colour2 ~ "MooBot: ");
			stdout.flush();
			Thread.sleep(900.msecs);
			write(".");
			stdout.flush();
			Thread.sleep(200.msecs);
			write(".");
			stdout.flush();
			Thread.sleep(200.msecs);
			write(".");
			stdout.flush();
			Thread.sleep(1200.msecs);
			write( "\b\b\b" ~ replies[reply] ~ colour1 ~ "\n");
			break;
		}
	}
}