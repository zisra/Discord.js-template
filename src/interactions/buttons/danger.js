export const interactionHandler = async (interaction, ephemeral) => {
	await interaction.reply({ content: 'Danger!', ephemeral });
};
