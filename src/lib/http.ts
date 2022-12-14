// type FetchClient = (input: RequestInfo | URL, init?: RequestInit) => Promise<Response>;

/**
 * Send GET request
 * @param url URL to send request
 */
export async function GET(url: string): Promise<unknown> {
	const response = await fetch(url);
	if (!response.ok) throw new Error(response.statusText);
	const data = await response.json();
	return data;
}

/**
 * Send POST request
 * @param url URL to send request
 * @param body Request body
 */
export async function POST(url: string, body?: unknown): Promise<unknown> {
	const response = await fetch(url, {
		method: 'POST',
		body: body ? JSON.stringify(body) : undefined,
		headers: { 'Content-Type': 'application/json' }
	});

	if (!response.ok) throw new Error(response.statusText);
	const data = await response.json();
	return data;
}

/**
 * Send PUT request
 * @param url URL to send request
 * @param body Request body
 */
export async function PUT(url: string, body?: unknown): Promise<unknown> {
	const response = await fetch(url, {
		method: 'PUT',
		body: body ? JSON.stringify(body) : undefined,
		headers: { 'Content-Type': 'application/json' }
	});

	if (!response.ok) throw new Error(response.statusText);
	const data = await response.json();
	return data;
}

/**
 * Send DELETE request
 * @param url URL to send request
 * @param body Request body
 */
export async function DELETE(url: string, body?: unknown): Promise<unknown> {
	const response = await fetch(url, {
		method: 'DELETE',
		body: body ? JSON.stringify(body) : undefined,
		headers: { 'Content-Type': 'application/json' }
	});

	if (!response.ok) throw new Error(response.statusText);
	const data = await response.json();
	return data;
}
