import "./App.css";

import User from "./components/User";

function App() {
	return (
		<>
			<User name="Mehmet" surname="Seven" isLoggedIn={true} age={29} />
		</>
	);
}

export default App;
