import { ContextMenuCommandBuilder, ApplicationCommandType, time } from 'discord.js';

export const interactionInfo = {
	builder: new ContextMenuCommandBuilder()
		.setName('Message info')
		.setType(ApplicationCommandType.Message),
};

export const interactionHandler = async (interaction, ephemeral) => {
	const target = interaction.targetMessage;

	interaction.reply({
		content: `ID: ${target.id}\nAuthor: ${target.author.username}#${
			target.author.discriminator
		}\nCreated: ${time(target.createdAt)}\n`,
		ephemeral,
	});
};
