module.exports = {
	name: 'say',
	description: 'Says what you say.',
	aliases: [''],
	run: async (bot, message) => {
	  message.delete()
    const sayArgs = message.content.split(" ").slice(1);
    if (
    message.member.roles.cache.some(role =>
    ["Say Permissions"].includes(role.name)
    )
    ) {
      var saytext = sayArgs.join(" ");
      message.channel.send(`**${message.member.displayName} said:** ${saytext}`)
    }
    else {
      message.reply("you done have permission to do that.")
    }
    let mention =
    (message.mentions.members.first())
    if (process.env.logchannelid === "false") return;
      const logchannel = message.guild.channels.cache.get(
        process.env.logchannelid
          );
            logchannel.send({
              embed: {
                color: 2127726,
                description: `<@${message.author.id}> (${message.author.tag}) said: \"${saytext}\" in the channel ${message.channel}`,
                author: {
                  name: message.author.tag,
                  icon_url: message.author.displayAvatarURL()
                  },
                footer: {
                text: "Say Logs"
                    },
                timestamp: new Date()
              }
      });
    }
  }