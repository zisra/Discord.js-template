import ExampleModal from '../../structures/modals/survey.js';

export const interactionHandler = async (interaction) => {
	await interaction.showModal(ExampleModal({ surveyQuestions: ['sport', 'activity'] }));
};
