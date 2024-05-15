import React, { createContext, useEffect, useState } from "react";
import { IAuthProvider, IContext, IAuth } from "./types";
import {
	getUserLocalStorage,
	LoginRequest,
	removeUserLocalStorage,
	setUserLocalStorage,
} from "./util";

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
	const [user, setUser] = useState<IAuth | null>();

	useEffect(() => {
		const userLocal = getUserLocalStorage();

		console.log(userLocal);

		if (userLocal) {
			setUser(userLocal);
		}
	}, []);

	async function authenticate(username: string, password: string) {
		const response = await LoginRequest(username, password);

		const payload = {
			access: response.access,
			refresh: response.refresh,
		};

		setUser(payload);
		setUserLocalStorage(payload);
	}

	async function logout() {
		setUser(null);
		removeUserLocalStorage();
	}

	return (
		<AuthContext.Provider value={{ ...user, authenticate, logout }}>
			{children}
		</AuthContext.Provider>
	);
};
