import Link from 'next/link';

const UserList = props => (
	<div>

		{
			props.users.map(user => (
				<div>
					<Link href={`/user?name=${user.username}`} as={`/@/${user.username}`}>
						<a className="username">{ user.name }</a>
					</Link>
				</div>
			))
		}

		<style jsx>{`
				.username{
					background: black;
					color: white
				}
		`}</style>
	</div>
);

export default UserList;