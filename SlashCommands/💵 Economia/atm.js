const Discord = require("discord.js")
const { QuickDB } = require("quick.db");
const db = new QuickDB();

module.exports = {
  name: "atm",
  description: "olhe a quantia de dinheiro seu ou de um user",
  type: 1,
  options: [
    {
      name: "user",
      description: "Mencione um user",
      type: 6,
      required: false,
    }
  ],
  
  run: async (client, interaction, args) => {
   
    let user = interaction.options.getUser("user");
        if (!user) user = interaction.user;
    
    let money = await db.get(`money_${user.id}`) || 0
    
    const gabriel = new Discord.EmbedBuilder()
  .setColor(`Random`)
  .setDescription(`O ${user} Possui \`${money.toLocaleString()}\` Coins.`)

    interaction.reply({embeds: [gabriel]})
    
  }
}
