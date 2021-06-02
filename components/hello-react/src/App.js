import "./App.css";

const name = "Mehmet";
const surname = "Seven";
const isLoggedIn = false;

function App() {
	return (
		<>
			<h1>
				{isLoggedIn
					? ` Benim adım ${name}, soyadım ${surname} `
					: "Giriş yapmadınız."}
			</h1>
		</>
	);
}

export default App;
