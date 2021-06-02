function User({ name, surname, age, isLoggedIn, friends }) {
	return (
		<>
			<h1>
				{isLoggedIn ? `${name} ${surname} (${age})` : "Giriş yapmadınız."}
			</h1>

			{friends.map((friend) => (
				<div key={friend.id}>{friend.name}</div>
			))}
		</>
	);
}

export default User;
