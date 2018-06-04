import UserList from '../components/UserList';
import Layout from '../components/Layout';
import fetch from 'isomorphic-fetch';

const Users = props => (
	<Layout>
		<div>
			<h2>Users page</h2> <br/>
			<UserList users={props.users}/>
		</div>
	</Layout>
);

Users.getInitialProps = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/users');
	const users = await res.json();

	return {
		users
	}
};

export default Users;