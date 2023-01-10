export const interactionHandler = async (interaction, ephemeral) => {
	await interaction.reply({
		content: `Looks like you love the activity ${interaction.fields.getTextInputValue('activity')}`,
		ephemeral,
	});
};
