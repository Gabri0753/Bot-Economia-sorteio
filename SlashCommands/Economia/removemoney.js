const Discord = require("discord.js");;
const { QuickDB } = require("quick.db");
const db = new QuickDB();

module.exports = {
  name: "removemoney",
  description: "remover moedas de um usuario",
  type: 1,
  options: [
    {
      name: "user",
      description: "mencione o usuario"
      type: 6,
      required: true,
    },
    {
      name: "quantidade",
      description: "coloque a quantidade que deseja",
      type: 10,
      required: true,
    }
  ],
  
  run: async (client, interaction, args) => {
    
    if (interaction.user.id !== "SEU ID DO DISCORD") {
        return interaction.reply(`${interaction.user.username} Ops... apenas meu dono(a) pode usar este comando.`)
    } else {
    
    let user = interaction.options.getUser("usuario");
    let quantia = interaction.options.getNumber("quantidade");
    
    const embed = new Discord.EmbedBuilder()
    .setColor(`Random`)
    .setDescription(`**${interaction.user.username} removeu \`R$${quantia.toLocaleString()}\` de Coins de ${user.username}**`)
    }
  }
}