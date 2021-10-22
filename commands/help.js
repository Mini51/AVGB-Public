const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed,} = require('discord.js');
const { owner, avatar } = require('../config.json');

module.exports = {

	
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Shows list of all commands.'),
	async execute(interaction) {
		const embed = new MessageEmbed()
		.setColor('#0099ff')
		.setTitle('SUPPORT')
		.setAuthor(interaction.user.username, interaction.user.displayAvatarURL({ dynamic: true }))
		.setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Icon-round-Question_mark.svg/1200px-Icon-round-Question_mark.svg.png')		.setDescription('')
		.setDescription('A list of all avaliable commands')
		.addFields(
			{ name: '**Random**', value: '/Roll - Rolls a die.\n /d20 - Rolls a D20 die.\n /cf - Flips a coin.'},
			{ name: '**Fun**', value: '/gm - Says good morning.\n /gn - Says goodnight.\n /cat - Displays a picture of a cat.'},
			{ name: '**Util**', value: '/avatar - Get the avatar URL of the selected user, or your own avatar.\n/socials - Sends all of our social media. \n /ping - Replies with Pong! \n /invite - sends a bot invite.'}
		)
		.setTimestamp()
		.setFooter(`Made by: ${owner}`, avatar);

		await interaction.reply({ embeds: [embed], ephemeral: true  })
	},
};