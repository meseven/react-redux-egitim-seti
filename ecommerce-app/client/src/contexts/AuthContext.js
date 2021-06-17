import { useState, createContext, useEffect, useContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loggedIn, setLoggedIn] = useState(false);

	const login = (data) => {
		setLoggedIn(true);
		setUser(data.user);

		localStorage.setItem("access-token", data.accessToken);
		localStorage.setItem("refresh-token", data.refreshToken);
	};

	const values = {
		loggedIn,
		user,
		login,
	};

	return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
