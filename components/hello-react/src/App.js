import "./App.css";

import Header from "./components/Header";

function App() {
	return (
		<>
			<Header />
			<p className="xyz">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus
				dolor ut esse adipisci quisquam vel consequuntur unde minima mollitia
				tenetur. Ipsa ea rerum asperiores corrupti ut quam temporibus enim ab.
			</p>

			<label htmlFor="myinput">
				Name
				<input id="myinput" />
			</label>
		</>
	);
}

export default App;
