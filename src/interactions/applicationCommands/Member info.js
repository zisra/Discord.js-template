import { ContextMenuCommandBuilder, ApplicationCommandType, time } from 'discord.js';

export const interactionInfo = {
	builder: new ContextMenuCommandBuilder()
		.setName('Member info')
		.setType(ApplicationCommandType.User),
};

export const interactionHandler = async (interaction, ephemeral) => {
	const target = interaction.targetUser;

	interaction.reply({
		content: `ID: ${target.id}\nUsername: ${target.username}#${
			target.discriminator
		}\nCreated: ${time(target.createdAt)}\n`,
		ephemeral,
	});
};
