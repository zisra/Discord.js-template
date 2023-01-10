export const interactionHandler = async (interaction) => {
	const focusedValue = interaction.options.getFocused();

	const data = await fetch(
		`https://suggestqueries.google.com/complete/search?client=firefox&q=${focusedValue}`
	);
	const json = await data.json();

	interaction.respond(json[1].map((choice) => ({ name: choice, value: choice })));
};
