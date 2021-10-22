const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed,} = require('discord.js');
const fetch = require('node-fetch');
const { owner, avatar } = require('../config.json');

module.exports = {

	
	data: new SlashCommandBuilder()
		.setName('cat')
		.setDescription('Displays a picture of a cat.'),
        
	async execute(interaction) {

		// Getting the image from the api
        const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());


		// Creating the embed
		const embed = new MessageEmbed()
		.setTitle(`Here is a cute cat ${interaction.user.username}`)
		.setImage(file)
		

		// Send messseage
		await interaction.reply({ embeds: [embed], ephemeral: true  })
	},
};