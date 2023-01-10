import fs from 'node:fs/promises';

import * as dotenv from 'dotenv';
import { Client, GatewayIntentBits } from 'discord.js';

dotenv.config();

const client = new Client({
	intents: [GatewayIntentBits.Guilds],
});

(async () => {
	const eventFiles = await fs.readdir('./src/events');

	for (const file in eventFiles) {
		const eventName = eventFiles[file].replace('.js', '');
		const eventFile = await import(`./events/${eventName}.js`);
		client.on(eventName, eventFile.default);
	}
})();

client.login(process.env.TOKEN);
