import { SlashCommandBuilder, PermissionFlagsBits } from 'discord.js';

export const interactionInfo = {
	builder: new SlashCommandBuilder()
		.setName('kick')
		.setDescription('Kick a member')
		.setDMPermission(false)
		.setDefaultMemberPermission(PermissionFlagsBits.KickMembers)
		.addUserOption((option) => option.setName('target').setDescription('Target member')),
};

export const interactionHandler = async (interaction, ephemeral) => {
	interaction.reply({
		content: 'Hello',
		ephemeral,
	});
};
