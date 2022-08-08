const Discord = require('discord.js')
const { QuickDB } = require("quick.db");
const db = new QuickDB();

module.exports = {
    name: "addmoney",
    description: "Adicione moedas a um usuario.",
    type: 1,
    options: [
        {
            name: "usuário",
            type: 6,
            description: "Mencione um usuário para adicionar moedas.",
            required: true
        },
        {
            name: "quantia",
            type: 10,
            description: "Coloque uma quantia para adicionar ao usuario",
            required: true
        }
    ],

    run: async (client, interaction, args) => {
        
        if (interaction.user.id !== "SEU ID DO DISCORD") {
        return interaction.reply(`${interaction.user.username} Ops... apenas meu dono pode usar este comando.`)
        
        let quantia = interaction.options.getNumber("quantia");
        let user = interaction.options.getUser("usuário");
        
        interaction.reply(`**R$${quantia.toLocaleString()}** Moedas foram adicionadas para ${user}`)
        
        db.add(`money_${interaction.user.id}`, quantia)
        }
    }
}
