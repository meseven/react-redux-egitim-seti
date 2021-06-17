import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Signin from "./pages/Auth/Signin";
import Signup from "./pages/Auth/Signup";

function App() {
	return (
		<Router>
			<div>
				<Navbar />

				<div id="content">
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/signin" component={Signin} />
						<Route path="/signup" component={Signup} />
					</Switch>
				</div>
			</div>
		</Router>
	);
}

function Home() {
	return <h2>Home</h2>;
}

export default App;
