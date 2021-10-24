const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, Message,} = require('discord.js');
const { Embed_pfp} = require('../config.json');


module.exports = {

	
	data: new SlashCommandBuilder()
		.setName('gn')
		.setDescription('Says goodnight.'),
	async execute(interaction) {
		const embed = new MessageEmbed()
		.setColor('AQUA')
		.setTitle('Credits')
        .setDescription('This discord bot is made by, mini#5130')
        .addField('Github','https://github.com/youthfulslinky')
        .setThumbnail('https://cdn.discordapp.com/avatars/851147210502438952/1efcafee91664260fceaf2ec92505b9a.webp?size=80')
		.setTimestamp()
		.setFooter(`Made by: mini#5130`, Embed_pfp);

		await interaction.reply({ embeds: [ embed ], ephemeral: true  })
	},
};