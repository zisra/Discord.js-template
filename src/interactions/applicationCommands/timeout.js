import { SlashCommandBuilder } from 'discord.js';

export const interactionInfo = {
	builder: new SlashCommandBuilder().setName('timeout').setDescription('Time out a member'),
};

export const interactionHandler = async (interaction, ephemeral) => {
	interaction.reply({
		content: 'Hello',
		ephemeral,
	});
};
