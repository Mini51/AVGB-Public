const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed,} = require('discord.js');
const { Embed_pfp } = require('../config.json');

module.exports = {

	
	data: new SlashCommandBuilder()
		.setName('invite')
		.setDescription('Sends a bot invite.'),
	async execute(interaction) {
		const embed = new MessageEmbed()
		.setColor('#0099ff')
		.setTitle('Bot invite')
        .setURL('https://discord.com/api/oauth2/authorize?client_id=851147210502438952&permissions=8&scope=applications.commands%20bot')
        .setDescription('If you find any errors you can join our support server ')
		.setTimestamp()
		.setFooter(`Made by: mini#5130`, Embed_pfp);

		await interaction.reply({ embeds: [embed], ephemeral: true  })
	},
};