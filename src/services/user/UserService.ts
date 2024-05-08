import axiosInstance from "../common/axiosInstance";
import { LoginResponse, RegisterResponse } from "./types";

class UserService {
	async login(username: string, password: string): Promise<LoginResponse> {
		try {
			const response = await axiosInstance.post("/login/", {
				username,
				password,
			});

			console.log(response);

			if (response.status === 200) {
				return response.data as LoginResponse;
			} else {
				throw new Error("Falha no login");
			}
		} catch (error) {
			throw error;
		}
	}

	async register(
		nome: string,
		username: string,
		senha: string
	): Promise<RegisterResponse> {
		try {
			const response = await axiosInstance.post("/cadastrar/", {
				nome,
				username,
				senha,
			});

			console.log(response);

			if (response.status === 201) {
				return response.data as RegisterResponse;
			} else {
				throw new Error("Falha ao se cadastrar");
			}
		} catch (error) {
			throw error;
		}
	}
}

export default new UserService();
