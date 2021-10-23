const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed} = require("discord.js")
const { Embed_pfp } = require('../config.json');





module.exports = {
	data: new SlashCommandBuilder()
		.setName('avatar')
		.setDescription('Get the avatar URL of the selected user, or your own avatar.')
		.addUserOption(option => option.setName('target').setDescription('The user\'s avatar to show').setRequired(true)),
	async execute(interaction) {

		// Getting the user that was mentioned
		const user = interaction.options.getUser('target');

		// Creating embed
		const embed = new MessageEmbed()
		.setTitle(`${user.username}'s profile picture'`) 
		.setImage(user.displayAvatarURL())
		.setFooter(`Made by: mini#5130`, Embed_pfp);

		
		
		if (user) return interaction.reply({ embeds: [embed], ephemeral: true  });
	},
};