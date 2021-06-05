import { useContext } from "react";

import Button from "./Button";
import Header from "./Header";

import ThemeContext from "../context/ThemeContext";
import Profile from "./Profile";

function Container() {
	const { theme } = useContext(ThemeContext);

	return (
		<div className={`app ${theme}`}>
			<Header />
			<hr />
			<Button />

			<hr />
			<Profile />
		</div>
	);
}

export default Container;
