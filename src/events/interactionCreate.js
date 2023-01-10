const ephemeral = true;

export default async (interaction) => {
	try {
		if (interaction.isChatInputCommand()) {
			const commandName = interaction.commandName;

			const commandFile = await import(`../interactions/applicationCommands/${commandName}.js`);
			if (!commandFile.subcommands) {
				commandFile.interactionHandler(interaction, ephemeral);
			} else {
				commandFile.subcommands[interaction.options.getSubcommand()](interaction, ephemeral);
			}
		} else if (interaction.isButton()) {
			const buttonName = interaction.customId;

			const buttonFile = await import(`../interactions/buttons/${buttonName}.js`);
			buttonFile.interactionHandler(interaction, ephemeral);
		} else if (interaction.isModalSubmit()) {
			const modalName = interaction.customId;

			const modalFile = await import(`../interactions/modalSubmit/${modalName}.js`);
			modalFile.interactionHandler(interaction, ephemeral);
		} else if (interaction.isAutocomplete()) {
			const commandName = interaction.commandName;

			const autocompleteFile = await import(`../interactions/autocomplete/${commandName}.js`);
			autocompleteFile.interactionHandler(interaction);
		} else if (interaction.isContextMenuCommand()) {
			const contextMenuName = interaction.commandName;

			const contextMenuFile = await import(
				`../interactions/applicationCommands/${contextMenuName}.js`
			);
			contextMenuFile.interactionHandler(interaction, ephemeral);
		} else if (interaction.isAnySelectMenu()) {
			const selectMenuName = interaction.customId;

			const selectMenuFile = await import(`../interactions/selectMenus/${selectMenuName}.js`);
			selectMenuFile.interactionHandler(interaction, ephemeral);
		}
	} catch (err) {
		console.error(err);
		await interaction.reply({
			content: 'Something went wrong executing this command.',
			ephemeral,
		});
	}
};
