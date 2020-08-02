const Discord = require('discord.js')
const client = new Discord.Client()
client.login(process.env.TOKEN)
var prefix = '/' 

client.on('message', message => {
  
  if(message.content === '/ping') {
    message.channen.send('pong!!')
    
  }
  
  if(message.content.startsWith(`${prefix}say`)) {
    var text = message.content.split(' ').slice(1).join(' ')
    if(!text) return message.reply('Tolong Beri Aku Kata Kata!!!')
    message.channel.send(text)
  }
  
  
  
  
  
})