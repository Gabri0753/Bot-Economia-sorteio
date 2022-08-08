const {EmbedBuilder} = require("discord.js");;
const { QuickDB } = require("quick.db");
const db = new QuickDB();
const ms = require("ms")
const cooldowns = {}

module.exports = {
  name: "work",
  description: "Trabalhe para ganhar dinheiro.",
  type: 1,

  run: async(client, interaction, args) => { 

    if(!cooldowns[interaction.user.id])cooldowns[interaction.user.id]={ lastCmd:null};let ultimoCmd=cooldowns[interaction.user.id].lastCmd;
        let timeout = ms("30 minutes") // Coloque em ms o tempo
        if(ultimoCmd!==null&&timeout-(Date.now()-ultimoCmd)>0){let time=ms(timeout-(Date.now()-ultimoCmd));let resta=[time.seconds,'segundos'];
        if(resta[0]==0)resta=['alguns','millisegundos'];if(resta[0]==1)resta=[time.seconds,'segundo'];

        interaction.reply({ content: `Espere **${time}** para poder trabalhar novamente.`, ephemeral:true});return;}else{cooldowns[interaction.user.id].lastCmd=Date.now()};


        let random = [`Taxista`, `Conselheiro Fiscal`, `Programador`, `Piloto de onibus`]
        let aleatorio = random[Math.floor(Math.random() * random.length)]

    let amount = Math.floor(Math.random() * 1500) + 250;

    let sucess = new EmbedBuilder()
    .setTitle(`Trabalho!`)
    .setColor(`Green`)
    .setDescription(`${interaction.user}, Você trabalhou como ${aleatorio} e ganhou **R$${amount.toLocaleString()}**.`)

    db.add(`money_${interaction.user.id}`, amount)
    
      interaction.reply({embeds: [sucess]})
}
}
