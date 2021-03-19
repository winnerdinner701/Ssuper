module.exports = {
	name: 'ping',
	aliases: [''],
	description: 'Pong!',
	cooldown: 1000,
	run: async (bot, message, args) => {
		message.channel.send('Pong!').then(msg => {
			const ping = msg.createdTimestamp - message.createdTimestamp;
			msg.edit(`Pong! Response ping is ${ping}ms. WebSocket ping is ${bot.ws.ping}ms.`);
		})
		bot.cooldown.set(`ping${message.author.id}`, Date.now() + 1000);
	}
}
const Discord = require("discord.js");
const interactions = require("discord-slash-commands-client");

// create a new client
const client = new Discord.Client();
const token = "Your unique bot token";

// attach the interaction client to discord.js client
client.interactions = new interactions.Client(token, "You bots user id");

// attach and event listener for the ready event
client.on("ready", () => {
  console.log("Client is ready!");

  // Create a new command that we can test
  client.interactions
    .createCommand({
      name: "ping",
      description: "ping pong",
    })
    .then(console.log)
    .catch(console.error);
});

// attach and event listener for the interactionCreate event
client.on("interactionCreate", (interaction) => {
  if (interaction.name === "ping") {
    interaction.channel.send("pong");
  }
});

// login
client.login(token);