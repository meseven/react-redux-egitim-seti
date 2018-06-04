import Navbar from './Navbar';

const Layout = props => (
	<div>
		<Navbar/>
		{ props.children }
	</div>
);

export default Layout;