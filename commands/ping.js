const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed,} = require('discord.js');
const { owner, avatar } = require('../config.json');


module.exports = {

	
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		const embed = new MessageEmbed()
		.setColor('#0099ff')
		.setTitle('Pong')
		.setAuthor(interaction.user.username, interaction.user.displayAvatarURL({ dynamic: true }))
		.setTimestamp()
		.setFooter(`Made by: ${owner}`, avatar);

		await interaction.reply({ embeds: [embed], ephemeral: true  })
	},
};