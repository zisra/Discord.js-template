function match() {
	const input = Array.from(arguments);
	const checkOn = input[0];
	const checksList = input.slice(1);
	let isMatch = false;
	checksList.forEach((check) => {
		if (checkOn === check) {
			isMatch = true;
		}
	});
	return isMatch;
}

export default (timeString) => {
	const splitDate = timeString.split(' ');
	if (splitDate.length !== 2) throw new Error('Invalid format');

	const date = splitDate[0];
	const dateFormat = splitDate[1];
	let millisecondLength;

	if (match(dateFormat, 'ms', 'millisecond', 'milliseconds')) {
		millisecondLength = 1;
	} else if (match(dateFormat, 's', 'second', 'seconds', 'sec')) {
		millisecondLength = 1000;
	} else if (match(dateFormat, 'm', 'minute', 'minutes', 'min')) {
		millisecondLength = 1000 * 60;
	} else if (match(dateFormat, 'h', 'hr', 'hour', 'hours')) {
		millisecondLength = 1000 * 60 * 60;
	} else if (match(dateFormat, 'd', 'day', 'days')) {
		millisecondLength = 1000 * 60 * 60 * 24;
	} else if (match(dateFormat, 'w', 'week', 'weeks')) {
		millisecondLength = 1000 * 60 * 60 * 24 * 7;
	} else if (match(dateFormat, 'mth', 'month', 'months')) {
		millisecondLength = 1000 * 60 * 60 * 24 * 30;
	} else if (match(dateFormat, 'y', 'yr', 'year', 'years')) {
		millisecondLength = 1000 * 60 * 60 * 24 * 365;
	} else {
		throw new Error('Invalid format');
	}

	return millisecondLength * parseInt(date);
};
