import Head from 'next/head';
import Navbar from './Navbar';

const Layout = props => (
	<div>
		<Head>
			<title>My Website</title>
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.1/css/bootstrap.min.css" />
		</Head>
		<Navbar/>
		{ props.children }
	</div>
);

export default Layout;