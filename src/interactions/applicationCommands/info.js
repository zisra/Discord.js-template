import { SlashCommandBuilder, ChannelType, time } from 'discord.js';

export const interactionInfo = {
	builder: new SlashCommandBuilder()
		.setName('info')
		.setDescription('Bot info')
		.addSubcommandGroup((subcommandGroup) =>
			subcommandGroup
				.setName('bot')
				.setDescription('Get info on the bot')
				.addSubcommand((subcommand) =>
					subcommand.setName('guilds').setDescription('Get info on how many guilds the bot is in')
				)
				.addSubcommand((subcommand) =>
					subcommand.setName('online').setDescription('Get info on since when the bot is online')
				)
		)
		.addSubcommand((subcommand) =>
			subcommand
				.setName('user')
				.setDescription('Get info on a user')
				.addUserOption((option) =>
					option.setName('target').setDescription('The member to look up').setRequired(true)
				)
		)
		.addSubcommand((subcommand) =>
			subcommand
				.setName('channel')
				.setDescription('Get info on a channel')
				.addChannelOption((option) =>
					option
						.setName('target')
						.setDescription('The channel to look up')
						.setRequired(true)
						.addChannelTypes(
							ChannelType.GuildText,
							ChannelType.GuildVoice,
							ChannelType.GuildAnnouncement,
							ChannelType.GuildForum,
							ChannelType.GuildStageVoice
						)
				)
		),
};

export const interactionHandler = async (interaction, ephemeral) => {
	interaction.reply({
		content: 'Interaction seems to have worked',
		ephemeral,
	});
};

export const subcommands = {
	guilds: (interaction, ephemeral) => {
		interaction.reply({
			content: `The bot is in ${interaction.client.guilds.cache.size} guilds`,
			ephemeral,
		});
	},
	online: (interaction, ephemeral) => {
		interaction.reply({
			content: `The bot has been online since ${time(
				new Date(Date.now() - interaction.client.uptime)
			)}`,
			ephemeral,
		});
	},
	user: (interaction, ephemeral) => {
		const target = interaction.options.getUser('target');

		interaction.reply({
			content: `ID: ${target.id}\nUsername: ${target.username}#${
				target.discriminator
			}\nCreated: ${time(target.createdAt)}\n`,
			ephemeral,
		});
	},
	channel: (interaction, ephemeral) => {
		const target = interaction.options.getChannel('target');

		interaction.reply({
			content: `ID: ${target.id}\nName: ${target.name}\nCreated: ${time(target.createdAt)}\n`,
			ephemeral,
		});
	},
};
