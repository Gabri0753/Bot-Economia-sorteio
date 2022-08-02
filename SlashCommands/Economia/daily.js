const Discord = require("discord.js");;
const { QuickDB } = require("quick.db");
const db = new QuickDB();
const ms = import("pretty-ms");

module.exports =  {
    name: "daily",
    description: "ganhe sua recompensa diária",
    type: 1,
    
    run: async (client, interaction, args) => {

        let timeout = 86400000;

        let user = interaction.user;
        let guild = interaction.guild;

        function ms(ms) {
            const seconds = ~~(ms/1000)
            const minutes = ~~(seconds/60)
            const hours = ~~(minutes/60) 
            const days = ~~(hours/24)
            
            return { days, hours: hours%24, minutes: minutes%60, seconds: seconds%60 }
        
        }

        let author = await db.get(`daily_${interaction.user.id}`)

        let money = await db.get(`money_${interaction.user.id}`)

        if (author !== null && timeout - (Date.now() - author) > 0) {
              
            let time = ms(timeout - (Date.now() - author));

      interaction.reply({content: `não foi possível pegar seu prêmio diário espere ${time.days} Dias e ${time.hours} Horas`, ephemeral: true})

        } else {

          let amount = Math.floor(Math.random() * 1500) + 3500;

          let embed = new Discord.EmbedBuilder()
          .setColor(`Green`)
          .setTitle(`📠 Prêmio Diário`)
          .setDescription(`📋 ${interaction.user.username} Você pegou seu prêmio diário a ganhou ${amount} Coins.`)
          
interaction.reply({embeds: [embed]})

db.add(`money_${interaction.user.id}`, amount)
db.set(`daily_${interaction.user.id}`, Date.now())
      }
    }
  }
