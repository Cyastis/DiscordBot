var Discord = require('discord.io');
var logger = require('winston');
var prefix = '!'


// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: process.env.token,
   autorun: true
});

bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
	
	if (message.includes('owo')){
		bot.sendMessage({
			to: channelID,
			message: 'What\'s this?'
		});
	}
       
	if (message.substring(0, 24) == 'Graham Channel Destroyer'){
		bot.sendMessage({
			to: channelID,
			message: 'The current prefix is ' + prefix + '. To see documentation, please say ' + prefix + 'help'
		});
	}
	
	if (message.substring(0, 13) == prefix + 'changePrefix'){
		prefix = message.substring(14);
		bot.sendMessage({
			to: channelID,
			message: 'The prefix is now \'' + prefix + '\''
		});
	}
	
    if (message.substring(0, 1) == prefix) {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
            break;
			case 'help':
				bot.sendMessage({
					to: userID,
					message: 'Sorry, we don\'t actually have very many commands at the moment. There is !ping, !destroy and !intro, but that\'s it.'
				});
				bot.sendMessage({
					to: channelID,
					message: 'Documentation has been sent to your dms.'
				});
			break;
			case 'yoyo':
				bot.sendMessage({
					to: channelID,
					message: '()) \n -()) \n --()) \n ---()) \n ----()) \n -----()) \n ------()) \n -------()) \n --------()) \n ---------()) \n ----------()) \n -----------()) \n ------------()) \n -------------())
				});
			break;
			case 'cat':
				bot.sendMessage({
					to: channelID,
					message: 'Meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow'
				});
				bot.sendMessage({
					to: channelID,
					message: 'Cats are legit bro'
				});
				bot.sendMessage({
					to: channelID,
					message: '|             A    A \n |        (= ^w^ = )'
				});
			break;
			case 'intro':
				bot.sendMessage({
					to: channelID,
					message: 'Really? You waited all this time just to test that one piece of code? Lame. I hope this response was worth it :P'
				});
			break;
			case 'destroy':
				bot.sendMessage({
					to: channelID,
					message: 'DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM'
				});
				bot.sendMessage({
					to: channelID,
					message: 'DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM'
				});
				bot.sendMessage({
					to: channelID,
					message: 'DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM'
				});
				bot.sendMessage({
					to: channelID,
					message: 'DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM'
				});
				bot.sendMessage({
					to: channelID,
					message: 'DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM'
				});
			break;
            // Just add any case commands if you want to..
         }
     }
});
