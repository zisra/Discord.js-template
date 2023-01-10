import { ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder } from 'discord.js';

export default ({ surveyQuestions }) => {
	return new ModalBuilder()
		.setCustomId('survey')
		.setTitle('Survey')
		.addComponents(
			new ActionRowBuilder().addComponents(
				new TextInputBuilder()
					.setCustomId(surveyQuestions[0])
					.setLabel(`What's your favorite ${surveyQuestions[0]}?`)
					.setStyle(TextInputStyle.Short)
					.setPlaceholder('Placeholder')
					.setRequired(false)
			),
			new ActionRowBuilder().addComponents(
				new TextInputBuilder()
					.setCustomId(surveyQuestions[1])
					.setLabel(`What's your favorite ${surveyQuestions[1]}?`)
					.setStyle(TextInputStyle.Short)
					.setPlaceholder('Placeholder')
					.setRequired(true)
			)
		);
};
