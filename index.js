const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {
    if(message.content == '~smol') {
        message.channel.sendMessage('***IMPLOD***');
    }
});

bot.on('message', (message) => {
    if(message.content == 'ping') {
        message.channel.sendMessage('pong');
    }
});

bot.on('message', (message) => {
    if(message.content == '~donut') {
        message.channel.sendMessage('*Holds a gun up to your head* GIMME ALL YOUR FRIGGIN DONUTS!');
    }
});

bot.on('message', (message) => {
    if(message.content == 'Lolicon') {
        message.channel.sendMessage('<@!295802382359724044> IS A LOLICON **THE MAGIC CONCH SHELL HAS SPOKEN**');
    }
}); 

bot.on('message', (message) => {
    if(message.content == 'Welp') {
        message.channel.sendMessage('**WHO DARES TO SUMMON THE GOD OF WELP, <@!320664663115169793>?!**');
    }
});

bot.on('message', (message) => {
    if(message.content == 'YEEE') {
        message.channel.sendMessage('BOIIIIIIIIII');
    }
});

bot.on('message', (message) => {
    if(message.content == '~love') {
        message.channel.sendMessage('<@!295802382359724044> loves <@!340238202864533505>');
    }
});

bot.on('message', (message) => {
    if(message.content == '~headpat') {
        message.channel.sendMessage('***Return the pat***');
    }
});

bot.on('message', (message) => {
    if(message.content == '~thot') {
        message.channel.sendMessage('<@!184748355472064512> is thot supreme  ***THE MAGIC CONCH SHELL HAS SPOKEN***');
    }
});

bot.on('message', function(message) {
    if(message.content == '~SmolLoop') { 
      var interval = setInterval (function () {
        message.channel.sendMessage('***IMPLOD***')
      }, 1 * 86400000); 
    }
});

client.login(process.env.BOT_TOKEN);
