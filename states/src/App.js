import { useState } from "react";

function App() {
	const [name, setName] = useState("Mehmet");
	const [age, setAge] = useState(29);
	const [friends, setFriends] = useState(["Ahmet", "Murat"]);

	return (
		<div className="App">
			<h1>Merhaba {name}!</h1>
			<h2>{age}</h2>

			<button onClick={() => setName("Ahmet")}>Change name</button>
			<button onClick={() => setAge(25)}>Change age</button>

			<hr />
			<br></br>

			<h2>Friends</h2>
			{friends.map((friend, index) => (
				<div key={index}>{friend}</div>
			))}

			<br />

			<button onClick={() => setFriends([...friends, "Ayşe"])}>
				add new friend
			</button>
		</div>
	);
}

export default App;
