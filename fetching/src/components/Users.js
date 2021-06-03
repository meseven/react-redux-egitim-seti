import { useEffect, useState } from "react";

function Users() {
	const [users, setUsers] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((res) => res.json())
			.then((data) => setUsers(data))
			.catch((e) => console.log(e))
			.finally(() => setIsLoading(false));
	}, []);

	return (
		<div>
			<h1>Users</h1>

			{isLoading && <div>Loading...</div>}

			{users.map((user) => (
				<div key={user.id}>{user.name}</div>
			))}
		</div>
	);
}

export default Users;
