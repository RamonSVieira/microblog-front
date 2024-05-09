import UserService from "../../services/user/UserService";
import { IAuth } from "./types";

export function setUserLocalStorage(user: IAuth | null) {
	localStorage.setItem("u", JSON.stringify(user));
}

export function getUserLocalStorage() {
	const json = localStorage.getItem("u");

	if (!json) {
		return null;
	}

	const user = JSON.parse(json);

	return user ?? null;
}

export async function LoginRequest(username: string, password: string) {
	const resquest = await UserService.login(username, password);
	return resquest;
}
