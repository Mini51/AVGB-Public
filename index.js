const fs = require('fs');
const { Client, Collection, Intents, MessageEmbed, Message, DiscordAPIError } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.data.name, command);
}


// When ready 
client.once('ready', () => {

	const status = `over ${client.guilds.cache.size} servers | /help `

	client.user.setActivity(status, { type: 'WATCHING' });
	console.log(`AVG online in ${client.guilds.cache.size} servers \nStatus has been set to [ WATCHING ${status} ]`);
});


//Bot leave and join logs 
client.on('guildCreate', (guild) => {

	const log_channel = client.channels.cache.get('898314094782844989');

	const join_embed = new MessageEmbed()
	.setTitle(`AVG has been added to ${guild.name}`)
	.setDescription(`AVG is now in ${client.guilds.cache.size} servers`)
	.addField('Member count', `${guild.memberCount}`)
	.setThumbnail(guild.iconURL())
	.setColor('GREEN');

	log_channel.send({embeds: [join_embed]});

});
client.on('guildDelete', (guild) => {
	
	const log_channel = client.channels.cache.get('898314094782844989');

	const leave_embed = new MessageEmbed()
	.setTitle(`AVG has left ${guild.name}`)
	.setDescription(`AVG is now in ${client.guilds.cache.size} servers`)
	.addField('Member count',  `${guild.memberCount}`)
	.setThumbnail(guild.iconURL())
	.setColor('RED');

	log_channel.send({embeds: [leave_embed]});

});


// Creating interaction
client.on('interactionCreate', async interaction => {

	const error_embed = new MessageEmbed()
	.setTitle("There was a error")
	.setDescription('Please do /support for help')
	.setColor('RED')
	.setThumbnail('https://cdn0.iconfinder.com/data/icons/shift-free/32/Error-512.png')
	.setTimestamp();



	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		return interaction.reply({embeds: [error_embed], ephemeral: true });
	}
});

client.login(token);