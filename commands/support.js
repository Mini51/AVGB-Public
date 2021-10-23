const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed,} = require('discord.js');
const { Embed_pfp } = require('../config.json');


module.exports = {

	
	data: new SlashCommandBuilder()
		.setName('support')
		.setDescription('Support discord server'),
        
	async execute(interaction) {

		const embed = new MessageEmbed()
		.setColor('#5c24ab')
		.setTitle(`Support Server`)
        .setURL('https://discord.gg/5ebaJ8utfV')
        .addField('Please use this example form in your support ticket', '-Command used \n -Time command was used \n -Any other information', true)
		.setAuthor(interaction.user.username, interaction.user.displayAvatarURL({ dynamic: true }))
		.setTimestamp()
		.setFooter(`Made by: mini#5130`, Embed_pfp);

		await interaction.reply({ embeds: [embed], ephemeral: true  })
	},
};