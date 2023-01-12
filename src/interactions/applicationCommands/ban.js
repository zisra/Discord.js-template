import { SlashCommandBuilder, PermissionFlagsBits } from 'discord.js';

export const interactionInfo = {
	builder: new SlashCommandBuilder()
		.setName('ban')
		.setDescription('Manage bans')
		.setDMPermission(false)
		.setDefaultMemberPermission(PermissionFlagsBits.BanMembers)
		.addSubcommand((command) => command.setName('add').setDescription('Ban a member'))
		.addSubcommand((command) => command.setName('search').setDescription('Search for a ban'))
		.addSubcommand((command) => command.setName('remove').setDescription('Unban a member')),
};

export const subcommands = {
	add: async (interaction, ephemeral) => {
		interaction.reply({
			content: 'Hello',
			ephemeral,
		});
	},
	search: async (interaction, ephemeral) => {
		interaction.reply({
			content: 'Hello',
			ephemeral,
		});
	},
	remove: async (interaction, ephemeral) => {
		interaction.reply({
			content: 'Hello',
			ephemeral,
		});
	},
};

export const interactionHandler = async (interaction, ephemeral) => {
	interaction.reply({
		content: 'Hello',
		ephemeral,
	});
};
