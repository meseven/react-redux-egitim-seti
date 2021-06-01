import Link from 'next/link';
import Router from 'next/router';

const UserList = props => (
	<div>

		{
			props.users.map(user => (
				<div>
					<Link href={`/user?name=${user.username}`} as={`/@/${user.username}`}>
						<a
							onMouseEnter={() => { Router.prefetch(`/user?name=${user.username}`); console.log('prefetching..')}}
							className="username">{ user.name }</a>
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