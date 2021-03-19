module.exports = {
	name: 'invite',
	aliases: [''],
	description: 'Sends the invite link for the bot',
	run: async (bot, message) => {
	  message.delete()
	  message.reply("Invite link: https://discord.com/api/oauth2/authorize?client_id=820188091573731339&permissions=8&scope=bot%20applications.commands Support server: discord.gg/PPC5yhrYSy") 
	}
}