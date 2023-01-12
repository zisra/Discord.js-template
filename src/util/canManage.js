export default (interaction, target) => {
	if (target.id === interaction.guild.ownerId) return false;
	if (target.id === interaction.user.id) return false;
	if (interaction.user.id === interaction.guild.ownerId) return true;
	return (
		interaction.member.roles.highest.comparePositionTo(
			interaction.guild.members.cache.get(target.id).roles.highest
		) > 0
	);
};
