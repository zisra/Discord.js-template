export const interactionHandler = async (interaction, ephemeral) => {
	await interaction.reply({
		content: `I think you like to eat ${interaction.values[0]}`,
		ephemeral,
	});
};
