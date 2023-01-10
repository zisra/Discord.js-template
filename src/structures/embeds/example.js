import { EmbedBuilder } from 'discord.js';

export default ({ author, titleMessage }) => {
	return [
		new EmbedBuilder()
			.setAuthor({
				name: author.username,
				iconURL: author.displayAvatarURL(),
				url: `https://discord.com/users/${author.id}`,
			})
			.setTitle(titleMessage)
			.setImage(author.displayAvatarURL())
			.addFields({ name: 'Field', value: 'Value' })
			.setTimestamp()
			.setColor(0x0099ff),
	];
};
