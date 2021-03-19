module.exports = {
    name: 'unrank',
    description: 'Makes a user not an admin or mod.',
    aliases: [''],
    run: async (bot, message) => {
      let role2 = message.guild.roles.cache.find(r => r.name === "Discord Moderator");
      let role1 = message.guild.roles.cache.find(r => r.name === "Discord Administrator");
      let member = message.mentions.members.first();
      if (
    message.member.roles.cache.some(role =>
      ["Owner", "Bot", "Admin", "Mod", "✦ | The Gods"].includes(role.name)
    )
  ) {
      if(message.content.endsWith("1")){
      member.roles.remove(role2).catch(console.error);
      message.reply(`${member} is now not a mod`)
      }
      if(message.content.endsWith("2")){
        member.roles.remove(role1).catch(console.error);
        message.reply(`${member} is now not an admin`)
      }
    }
    else {
      message.reply("You dont have permission to do that")
    }
    let mention =
      (message.mentions.members.first())
    const logChannel = message.guild.channels.cache.find(ch => ch.name.includes('logs'));
            logchannel.send({
              embed: {
                color: 2127726,
                description: `<@${message.author.id}> (${message.author.tag}) made ${mention} not an admin/mod`,
                author: {
                  name: message.author.tag,
                  icon_url: message.author.displayAvatarURL()
                },
                footer: {
                  text: "Admin/Mod Logs"
                },
                timestamp: new Date()
              }
            });
    }
}