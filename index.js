// require discord.js classes
const { Client, Events, GatewayIntentBits } = require('discord.js');
const token = require('./config.json');

// Create new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready
client.once(Events.ClientReady, c => {
    console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.login(token);