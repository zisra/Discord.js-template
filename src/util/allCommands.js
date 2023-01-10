import fs from 'node:fs/promises';

export default async () => {
	const commandFiles = await fs.readdir('./src/interactions/applicationCommands');
	const commands = [];

	for (const file in commandFiles) {
		const commandFile = await import(`../interactions/applicationCommands/${commandFiles[file]}`);
		commands.push(commandFile);
	}

	return commands;
};
