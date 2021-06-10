import React from "react";

import ChatList from "./ChatList";
import ChatForm from "./ChatForm";

function Container() {
	return (
		<div className="App">
			<ChatList />
			<ChatForm />
		</div>
	);
}

export default Container;
