module.exports = (client, instance) => {
  client.on('message', (message) => {
    console.log(`${message.content}, ${message.author.tag}, ${message.channel.name}, ${message.guild.name}`)
  })
}

module.exports.config = {
  displayName: 'logMessages', 
  dbName: 'LOGMESSAGES', 
  loadDBFirst: true, 
}