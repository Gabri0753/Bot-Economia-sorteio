
const Discord = require("discord.js")

module.exports = {
  name: "ping",
  description: "veja meu ping",
  type: 1,

  run: async (client, interaction, args) => {

    interaction.reply({content: `Minha lântecia(ping) corresponde a \`${client.ws.ping}Ms\``, ephemeral: true})
}
}
