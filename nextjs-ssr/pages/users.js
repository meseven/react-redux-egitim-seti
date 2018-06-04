import UserList from '../components/UserList';
import Layout from '../components/Layout';

const Users = props => (
	<Layout>
		<div>
			<h2>Users page</h2> <br/>
			<UserList/>
		</div>
	</Layout>
);

export default Users;