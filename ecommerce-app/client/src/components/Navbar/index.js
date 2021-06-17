import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";

import { useAuth } from "../../contexts/AuthContext";

function Navbar() {
	const { loggedIn } = useAuth();

	console.log(loggedIn);

	return (
		<nav className={styles.nav}>
			<div className={styles.left}>
				<div className={styles.logo}>
					<Link to="/">eCommerce</Link>
				</div>

				<ul className={styles.menu}>
					<li>
						<Link to="/">Products</Link>
					</li>
				</ul>
			</div>

			<div className={styles.right}>
				{!loggedIn && (
					<>
						<Link to="/signin">
							<Button colorScheme="pink">Login</Button>
						</Link>
						<Link to="/signup">
							<Button colorScheme="pink">Register</Button>
						</Link>
					</>
				)}

				{loggedIn && (
					<>
						<Link to="/profile">
							<Button>Profile</Button>
						</Link>
					</>
				)}
			</div>
		</nav>
	);
}

export default Navbar;
