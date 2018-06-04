import Link from 'next/link';

const UserList = () => (
	<div>
		<Link href="/user?name=mehmet" as="mehmet">
			<a>Mehmet</a>
		</Link>
		<br/>
		<Link href="/user?name=ahmet" as="ahmet">
			<a>Ahmet</a>
		</Link>
	</div>
);

export default UserList;