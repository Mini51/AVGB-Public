# How to set up for local host

## Installing the needed files 

1. install NVM to install Node and NPM with the command below.
```Batch
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
```
2. Download this github page with the green code button above. 

3. Open the folder in your console and do. 
```Batch
npm install discord.js @discordjs/rest discord-api-types 
```
## Starting the bot
1. Make a discord bot application in  [Discord dev portal](https://discord.com/developers/applications). 

2. Paste your bots token into config.json were it says token.

3. Open the folder in console and use the command listed below.
```Batch
node deploy-commands.js
```
4. When it says "Successfully registered application commands."
Use the command below. 
```Batch 
Node index.js 
```
