import { SlashCommandBuilder } from 'discord.js';

export const interactionInfo = {
	builder: new SlashCommandBuilder()
		.setName('google')
		.setDescription('Look something up on Google')
		.addStringOption((option) =>
			option.setName('query').setDescription('Phrase to search for').setAutocomplete(true)
		),
};

export const interactionHandler = async (interaction, ephemeral) => {
	const query = encodeURIComponent(interaction.options.getString('query'));

	interaction.reply({
		content: `https://google.com/search?q=${query}`,
		ephemeral,
	});
};
