const { glob } = require("glob");
const { promisify } = require("util");
const { Client } = require("discord.js");
const globPromise = promisify(glob);

/**
 * @param {Client} client
 */
module.exports = async (client) => {

    const slashCommands = await globPromise(
        `${process.cwd()}/SlashCommands/*/*.js`
      );
    const ArrayCommands = [];

    slashCommands.map((value) => {
        const file = require(value);
        if (!file?.name) return;
        client.slashCommands.set(file.name, file);
        if (["MESSAGE", "USER"].includes(file.type)) delete file.description;
        ArrayCommands.push(file);
    });

    client.on("ready",
        async () => {
                  
            await client.guilds.cache.get("ID do seu servidor de testes")
            
            .commands.set(ArrayCommands);
            await client.application.commands.set(ArrayCommands);
        });

};
