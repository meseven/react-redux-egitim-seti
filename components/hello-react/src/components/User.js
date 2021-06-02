import PropTypes from "prop-types";

function User({ name, surname, age, isLoggedIn, friends, address }) {
	return (
		<>
			<h1>
				{isLoggedIn ? `${name} ${surname} (${age})` : "Giriş yapmadınız."}
			</h1>
			{address.title} {address.zip}
			<br />
			<br />
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
	address: PropTypes.shape({
		title: PropTypes.string,
		zip: PropTypes.number,
	}),
};

export default User;
