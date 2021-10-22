const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed,} = require('discord.js');
const { owner, avatar } = require('../config.json');

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
		.setFooter(`Made by: ${owner}`, avatar);

		await interaction.reply({ embeds: [embed], ephemeral: true  })
	},
};