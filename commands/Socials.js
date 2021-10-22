const { SlashCommandBuilder } = require('@discordjs/builders');
const discord = require('discord.js');
const { owner, avatar } = require('../config.json');

module.exports = {

	
	data: new SlashCommandBuilder()
		.setName('social')
    .setDescription('Sends all of our social media.'),
	async execute(interaction) {
		const embed = new discord.MessageEmbed()
		.setColor('#0099ff')
		.setTitle('AVG social media')
		.setAuthor(interaction.user.username, interaction.user.displayAvatarURL({ dynamic: true }))
        .addFields(
            { name: 'Twitch:', value: 'https://www.twitch.tv/youthfulslinky2' },
            { name: '\u200B', value: '\u200B' },
            { name: 'Twitter', value: 'k', inline: true },
            { name: 'Youtube', value: 'k', inline: true },
        )
        .setTimestamp()
		.setFooter(`Made by: ${owner}`, avatar);

		await interaction.reply({ embeds: [embed], ephemeral: true  })
	},
};