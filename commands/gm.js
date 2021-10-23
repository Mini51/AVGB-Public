const { SlashCommandBuilder, Embed } = require('@discordjs/builders');
const { MessageEmbed,} = require('discord.js');
const { Embed_pfp} = require('../config.json');


module.exports = {

	
	data: new SlashCommandBuilder()
		.setName('gm')
		.setDescription('Says good morning.'),
	async execute(interaction) {
		const embed = new MessageEmbed()
		.setColor('#0099ff')
		.setTitle(`Good morning ${interaction.user.username}`)
        .setImage('https://c.tenor.com/YapwVN8sHbYAAAAC/good-morning-good.gif')
		.setTimestamp()
		.setFooter(`Made by: mini#5130`, Embed_pfp);

		await interaction.reply({ embeds: [embed], ephemeral: true  })
	},
};