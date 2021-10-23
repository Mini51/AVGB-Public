const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, Message,} = require('discord.js');
const { Embed_pfp} = require('../config.json');


module.exports = {

	
	data: new SlashCommandBuilder()
		.setName('gn')
		.setDescription('Says goodnight.'),
	async execute(interaction) {
		const embed = new MessageEmbed()
		.setColor('#0099ff')
		.setTitle(`Goodnigt ${interaction.user.username}`)
        .setImage('https://c.tenor.com/nkEVT_9NNSQAAAAC/anime-bed.gif')
		.setTimestamp()
		.setFooter(`Made by: mini#5130`, Embed_pfp);

		await interaction.reply({ embeds: [embed], ephemeral: true  })
	},
};