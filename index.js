// config.json variables are commented out, .env variables are used here
/*const {
    prefix,
    token,
} = require('./config.json');*/
require('dotenv').config();
// import dependencies, and variables from our json file
const { Client, Intents, MessageEmbed } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

// create client and login with our token
// client.login(token);
client.login(process.env.TOKEN);

// basic bot listeners that trigger when executed
client.once('ready', () => {
    console.log('Ready!');
});
client.once('reconnecting', () => {
    console.log('Reconnecting!');
});
client.once('disconnect', () => {
    console.log('Disconnect!');
});

// read chat message and respond to them

// create listener for message event and save it in message object
client.on('messageCreate', async message => {
    if (message.author.bot) return; // if our own bot wrote the message we ignore it
    // if (!message.content.startsWith(prefix)) return; // if message doesnt start with our defined prefix we return
    if (!message.content.startsWith(process.env.PREFIX)) return; // if message doesnt start with our defined prefix we return
    
    // check which command to execute
    //if (message.content.startsWith(`${prefix}name`)){
    if (message.content.startsWith(`${process.env.PREFIX}name`)){
        message.reply(`Your name is ${message.author.username}`);
        return;
    } //else if (message.content.startsWith(`${prefix}greeting`)){
      else if (message.content.startsWith(`${process.env.PREFIX}greeting`)){
        message.channel.send("Hello world!");
        return;
    } //else if (message.content.startsWith(`${prefix}secret`)){
      else if (message.content.startsWith(`${process.env.PREFIX}secret`)){
        message.author.send("Shhh! This is a secret message for you");
        return;
    } //else if (message.content.startsWith(`${prefix}quote`)){
      else if (message.content.startsWith(`${process.env.PREFIX}quote`)){
        const quoteEmbed = new MessageEmbed().setColor("ORANGE").setTitle(`Quote for ${message.author.username}`).setURL("https://discord.js.org/#/docs/discord.js/stable/class/Client").setDescription("To be, or not to be. That is the question.")
        message.channel.send({embeds: [quoteEmbed]});
        return;
    } else {
        message.channel.send("You need to enter a valid command!"); // if invalid command, send this error message to the channel
    }
})