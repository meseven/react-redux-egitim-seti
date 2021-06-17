import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./reset.css";

import { QueryClient, QueryClientProvider } from "react-query";

import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const queryClient = new QueryClient();

ReactDOM.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<ChakraProvider>
				<App />
			</ChakraProvider>
		</QueryClientProvider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
