// Packages and Variables
const Discord = require("discord.js");
const { InteractionType } = require("discord-api-types/v10")


// Getting online
const client = new Discord.Client({ intents: 131071, shards: "auto" });
client.login("TOKEN DO SEU BOT");

// Slash Commands
module.exports = client;
client.commands = new Discord.Collection();
client.slashCommands = new Discord.Collection();
require("./handler")(client);
const { glob } = require("glob");
const { promisify } = require("util");

const globPromise = promisify(glob);

client.on("interactionCreate", async (interaction) => {
  
  if(!interaction.guild) return interaction.reply({content: `❌ infelizmente os comandos em slash não pode ser executados na minha dm.`, ephemeral: true});

 if(interaction.type == 2) {
   const cmd = client.slashCommands.get(interaction.commandName)
if(!cmd)
 return;

 const args = []

   for(let option of interaction.options.data) {
     if(option.type === "SUB_COMMAND") {
       if(option.name) args.push(option.value);
       option.options?.forEach((x) => {
         if(x.value) args.push(x.value)
       })
     } else if(option.value) args.push(option.value)
   }

   cmd.run(client, interaction, args);
 };

});

client.on("ready", () => {
  console.log("✅ logado em "+client.user.tag)
}) 
