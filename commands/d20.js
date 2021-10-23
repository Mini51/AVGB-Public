const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed,} = require('discord.js');
const { Embed_pfp } = require('../config.json');

module.exports = {

	
	data: new SlashCommandBuilder()
		.setName('d20')
		.setDescription('Rolls a D20 die.'),
        
	async execute(interaction) {
        const roll = Math.floor(Math.random() * 20) + 1

		const embed = new MessageEmbed()
		.setColor('RANDOM')
		.setTitle(`You rolled a ${roll}`)
		.setAuthor(interaction.user.username, interaction.user.displayAvatarURL({ dynamic: true }))
		.setTimestamp()
		.setFooter(`Made by: mini#5130`, Embed_pfp);

		await interaction.reply({ embeds: [embed], ephemeral: true  })
	},
};