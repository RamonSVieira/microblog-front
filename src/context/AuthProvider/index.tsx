import React, { createContext, useEffect, useState } from "react";
import { IAuthProvider, IContext, IAuth } from "./types";
import UserService from "../../services/user/UserService";
import { getUserLocalStorage, LoginRequest, setUserLocalStorage } from "./util";

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
	const [user, setUser] = useState<IAuth | null>();

	useEffect(() => {
		const user = getUserLocalStorage();

		if (user) {
			setUser(user);
		}
	}, []);

	async function authenticate(username: string, password: string) {
		const response = await LoginRequest(username, password);

		const payload = {
			access: response.access,
			refresh: response.token,
		};

		setUser(payload);
		setUserLocalStorage(payload);
	}

	async function logout() {
		setUser(null);
		setUserLocalStorage(null);
	}

	return (
		<AuthContext.Provider value={{ ...user, authenticate, logout }}>
			{children}
		</AuthContext.Provider>
	);
};
