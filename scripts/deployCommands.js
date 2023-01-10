import { clientID } from '#config';
import allCommands from '#util/allCommands';

import * as dotenv from 'dotenv';
import { REST, Routes, SlashCommandBuilder, PermissionFlagsBits, ChannelType } from 'discord.js';

dotenv.config();

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
	try {
		const commands = await allCommands();

		console.log(`Started refreshing ${commands.length} application (/) commands.`);
		const data = await rest.put(Routes.applicationCommands(clientID), {
			body: commands.map((i) => i.interactionInfo.builder.toJSON()),
		});
		console.log(`Successfully reloaded ${data.length} application (/) commands.`);
	} catch (error) {
		console.error(error);
	}
})();
