const { SlashCommandBuilder } = require("discord.js");

// module.exports allows require() in other files
// to access cleint instance, use interaction.client
module.exports = {
    // data property provides command definition for registering to discord
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Replies with Pong (and latency)!"),
    // async execute function contains funcitonality 
    async execute(interaction) {
        await interaction.reply(`Pong! (${interaction.client.ws.ping}ms)`);
    }
};