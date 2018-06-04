import Layout from '../components/Layout';

const User =  props => (
	<Layout>
		<div>
			<h2>User detail</h2>
			{ props.url.query.name }
		</div>
	</Layout>
);

export default User;