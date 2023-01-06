
/**
 * Create URL slug
 * @param value Value to create slug from
 * @returns
 */
export function createSlug(value: string) {
	return value
		.toLowerCase()
		.replace(/\s+/g, '-')
		.replace(/[^\w-]+/g, '')
		.replace(/--+/g, '-')
		.replace(/^-+/, '')
		.replace(/-+$/, '');
}

/**
 * Async sleep function
 * @param ms Time to sleep
 */
export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Validate if string contains valid regex
 * @param regex 
 */
export function isRegExValid(regex: string) {
	try {
		stringToRegEx(regex);
		return true;
	} catch (e) {
		return false;
	}
}

/**
 * Convert string to regex
 * @param str String to convert
 * @returns 
 */
export function stringToRegEx(str: string) {
	const main = str.match(/\/(.+)\/.*/)[1];
	const options = str.match(/\/.+\/(.*)/)[1];
	return new RegExp(main, options);
}