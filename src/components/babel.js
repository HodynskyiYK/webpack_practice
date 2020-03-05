export async function showUsers(users_url) {
	let response = await fetch(users_url);
	if (response.ok) {
		let users = await response.json();
		users.map(user => console.log(user));
	}
}