import { SlashCommandBuilder } from 'discord.js';
import ExampleEmbeds from '../../structures/embeds/example.js';
import ExampleComponents from '../../structures/components/example.js';

export const interactionInfo = {
	builder: new SlashCommandBuilder().setName('embed').setDescription('Send an embed'),
};

export const interactionHandler = async (interaction, ephemeral) => {
	interaction.reply({
		embeds: ExampleEmbeds({
			author: interaction.user,
			titleMessage: 'Some random embed with a random title for testing purposes',
		}),
		components: ExampleComponents(),
		ephemeral,
	});
};
