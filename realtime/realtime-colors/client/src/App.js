import "./App.css";

import { useEffect } from "react";
import { init } from "./socketApi";
import Palatte from "./components/Palatte";

function App() {
	useEffect(() => {
		init();
	}, []);

	return (
		<div className="App">
			<Palatte />
		</div>
	);
}

export default App;
