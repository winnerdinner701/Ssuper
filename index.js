const { Collection, Client, Discord, MessageEmbed } = require('discord.js');
const fs = require('fs');
const ms = require('ms');
const bot = new Client({ disableEveryone: true, partials: ["MESSAGE", "CHANNEL", "REACTION"] });
const token = require('./config.json').token;
const db = require('quick.db');
const mongoose = require('mongoose');
const chalk = require('chalk');
const figlet = require('figlet');
const keepAlive = require('./server');
const fetch = require('node-fetch');
const DiscordJS = require('discord.js')
const WOKCommands = require('wokcommands')

bot.on("ready", () => {
  bot.user.setActivity('for !help', { type: 'WATCHING' })
})



mongoose.connect('mongodb+srv://MrTechy:valtaoi12@techybot-v3.uzjqd.mongodb.net/Data', {
	useUnifiedTopology: true,
	useNewUrlParser: true,
}).then(console.log('Connected to Mongo.db!'));

module.exports = bot;
bot.cooldown = new Collection();
bot.prefix = '!';
bot.token = token;
bot.people = new Collection();
bot.owner = bot.users.cache.find(m => m.tag == 'ChrisRolex#9999');
bot.website = 'https://Ssuper.chriscopeman.repl.co';
bot.commands = new Collection();
bot.aliases = new Collection();
bot.categories = fs.readdirSync("./Cmds/");
["command", "event"].forEach(handler => {
	require(`./handlers/${handler}`)(bot);
});

bot.on('ready', async () => {
  console.log(chalk.yellow(figlet.textSync('Super+', { horizontalLayout: 'full' })));
  console.log(chalk.red(`Bot started!\n---\n`
  + `> Channels: ${bot.channels.cache.size}\n`
  + `> Servers: ${bot.guilds.cache.size}`));
  const disabledDefaultCommands = [
    'help',
    'command',
    'language',
    'prefix',
    'requiredrole'
  ]
  new WOKCommands(bot, {
    commandsDir: 'Comands',
    featureDir: 'features',
    testServers: [''],
    del: 2,
    showWarns: false,
    disabledDefaultCommands,
  })
})

keepAlive();

setInterval(async () => {
	await fetch(bot.website);
}, 15000);

bot.login(token);