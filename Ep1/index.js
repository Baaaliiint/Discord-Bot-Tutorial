const Discord = require('discord.js')
const client = new Discord.Client()

const config = require('./config.json')

client.on('ready', () =>{
    console.log(`Bejelentkezve ${client.user.tag}!`)
})

client.on('message', message => {
    if (message.content === 'Szia') {
        message.channel.send('Hello!')
    }
})

client.login(config.token)