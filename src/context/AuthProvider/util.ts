import UserService from "../../services/user/UserService";
import { IAuth } from "./types";

export function setUserLocalStorage(user: IAuth) {
	localStorage.setItem("access", user.access);
	localStorage.setItem("refresh", user.refresh);
}

export function removeUserLocalStorage() {
	localStorage.removeItem("access");
	localStorage.removeItem("refresh");
}

export function getUserLocalStorage() {
	const access = localStorage.getItem("access");
	const refresh = localStorage.getItem("refresh");

	if (!access || !refresh) {
		return null;
	}

	const user = {
		access: access,
		refresh: refresh,
	};

	return user ?? null;
}

export async function LoginRequest(username: string, password: string) {
	const resquest = await UserService.login(username, password);
	return resquest;
}
