import { ActionRowBuilder, ButtonBuilder, StringSelectMenuBuilder, ButtonStyle } from 'discord.js';

export default () => {
	return [
		new ActionRowBuilder().addComponents(
			new ButtonBuilder().setCustomId('primary').setLabel('Primary').setStyle(ButtonStyle.Primary),
			new ButtonBuilder()
				.setCustomId('secondary')
				.setLabel('Secondary')
				.setStyle(ButtonStyle.Secondary),
			new ButtonBuilder().setCustomId('success').setLabel('Success').setStyle(ButtonStyle.Success),
			new ButtonBuilder().setCustomId('danger').setLabel('Danger').setStyle(ButtonStyle.Danger)
		),
		new ActionRowBuilder().addComponents(
			new ButtonBuilder()
				.setLabel('Link')
				.setURL('https://discord.com/')
				.setStyle(ButtonStyle.Link),
			new ButtonBuilder().setLabel('Modal').setCustomId('modal').setStyle(ButtonStyle.Primary)
		),
		new ActionRowBuilder().addComponents(
			new StringSelectMenuBuilder().setCustomId('food').setPlaceholder('Pick a food').addOptions(
				{
					label: 'Sushi',
					description: 'Click me if you like sushi!',
					value: 'sushi',
				},
				{
					label: 'Pizza',
					description: 'Click me if you like pizza!',
					value: 'pizza',
				},
				{
					label: 'Tacos',
					description: 'Click me if you like tacos!',
					value: 'tacos',
				}
			)
		),
	];
};
