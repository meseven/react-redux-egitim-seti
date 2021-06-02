import PropTypes from "prop-types";

function User({ name, surname, age, isLoggedIn, friends }) {
	return (
		<>
			<h1>
				{isLoggedIn ? `${name} ${surname} (${age})` : "Giriş yapmadınız."}
			</h1>

			{friends &&
				friends.map((friend) => <div key={friend.id}>{friend.name}</div>)}
		</>
	);
}

User.propTypes = {
	name: PropTypes.string.isRequired,
	surname: PropTypes.string.isRequired,
	isLoggedIn: PropTypes.bool.isRequired,
	age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
	friends: PropTypes.array,
};

export default User;
