import { useContext } from "react";

import Button from "./Button";
import Header from "./Header";

import ThemeContext from "../context/ThemeContext";

function Container() {
	const { theme } = useContext(ThemeContext);

	return (
		<div className={`app ${theme}`}>
			<Header />
			<hr />
			<Button />
		</div>
	);
}

export default Container;
