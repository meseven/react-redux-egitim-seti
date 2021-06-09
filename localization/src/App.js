import "./App.css";

import { useState } from "react";
import { IntlProvider, FormattedMessage, FormattedNumber } from "react-intl";

const messages = {
	"tr-TR": {
		title: "Merhaba Dünya",
		description: "3 yeni mesajınız var",
	},
	"en-US": {
		title: "Hello World",
		description: "You have 3 new messages",
	},
};

function App() {
	const [lang, setLang] = useState("tr-TR");

	return (
		<div className="App">
			<IntlProvider messages={messages[lang]}>
				<FormattedMessage id="title" />

				<p>
					<FormattedMessage id="description" />
				</p>

				<br />
				<br />
				<button onClick={() => setLang("tr-TR")}>TR</button>
				<button onClick={() => setLang("en-US")}>EN</button>
			</IntlProvider>
		</div>
	);
}

export default App;
