import UserList from '../components/UserList';
import Layout from '../components/Layout';
import fetch from 'isomorphic-fetch';

class users extends React.Component {
	static async getInitialProps (){
		const res = await fetch('https://jsonplaceholder.typicode.com/users');
		const users = await res.json();

		return {
			users
		}
	}

	render() {
		return (
			<Layout>
				<div>
					<h2>Users page</h2> <br/>
					<UserList users={this.props.users}/>
				</div>
			</Layout>
		);
	}
}

export default users;