module.exports = {
    name: 'slowmode',
    description: 'Changes slowmode the slowmode in the channel.',
    aliases: ['slow'],
    run: async (bot, message) => {
      var slowArgs = message.content.substr(1).split(/ +/);
      var command = slowArgs[0].toLowerCase();
      if (
      message.member.roles.cache.some(role =>
      ["Founder", "Owner", "✦ | The Gods"].includes(role.name)
      )
      ) {
        if(slowArgs[1] <21600){
          message.channel.setRateLimitPerUser(slowArgs[1] , "reason");
          message.reply(`slowmode has been set to ${slowArgs[1]} seconds`)
        }
        if(slowArgs[1] > 21600){
          message.reply("Slowmode can only be set to 6 hours or less.")
        }
      }
      else {
        message.reply("you dont have permission to do that.")
      }
      
            logchannel.send({
              embed: {
                color: 2127726,
                description: `Slowmode in the channel ${message.channel} to ${slowArgs[1]} seconds`,
                author: {
                  name: message.author.tag,
                  icon_url: message.author.displayAvatarURL()
                },
                footer: {
                  text: "Slowmode Logs"
                },
                timestamp: new Date()
              }
            });
    }
}