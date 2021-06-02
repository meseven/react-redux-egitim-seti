import PropTypes from "prop-types";

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

User.propTypes = {
	name: PropTypes.string,
	surname: PropTypes.string,
	isLoggedIn: PropTypes.bool,
	age: PropTypes.number,
	friends: PropTypes.array,
};

export default User;
