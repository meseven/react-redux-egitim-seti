import Link from 'next/link';

const UserList = () => (
	<div>
		<Link href="/user?name=mehmet" as="/@/mehmet">
			<a className="username">Mehmet</a>
		</Link>
		<br/>
		<Link href="/user?name=ahmet" as="/@/ahmet">
			<a className="username">Ahmet</a>
		</Link>

		<style jsx>{`
				.username{
					background: black;
					color: white
				}
		`}</style>
	</div>
);

export default UserList;