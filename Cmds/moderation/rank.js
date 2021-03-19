module.exports = {
    name: 'rank',
    description: 'Makes a user an admin or mod.',
    aliases: [''],
    usage: ['[@member] [role (\"1\" for mod and \"2\" for admin)]'],
    run: async (bot, message) => {
      let role1 = message.guild.roles.cache.find(r => r.name === "Discord Administrator");
      let role2 = message.guild.roles.cache.find(r => r.name === "Discord Moderator");
      let member = message.mentions.members.first();
      if (
    message.member.roles.cache.some(role =>
      ["Owner", "Bot", "Admin", "Mod", "✦ | The Gods"].includes(role.name)
    )
  ) {
      if(message.content.endsWith("1")){
      member.roles.add(role2).catch(console.error);
      message.reply(`${member} is now a mod`)
      }
      if(message.content.endsWith("2")){
        member.roles.add(role1).catch(console.error);
        message.reply(`${member} is now an admin`)
      }
    }
    else {
      message.reply("You dont have permission to do that")
    }
    let mention =
      (message.mentions.members.first())
    const logChannel = message.guild.channels.cache.find(ch => ch.name.includes('logs'));
            logChannel.send({
              embed: {
                color: 2127726,
                description: `<@${message.author.id}> (${message.author.tag}) made ${mention} an admin/mod`,
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