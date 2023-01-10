export const interactionHandler = async (interaction, ephemeral) => {
	await interaction.reply({ content: 'Primary!', ephemeral });
};
