import axiosInstance from "../common/axiosInstance";
import LoginResponse from "./types";

class UserService {
	async login(username: string, password: string): Promise<LoginResponse> {
		try {
			const response = await axiosInstance.post("/login/", {
				username,
				password,
			});

			console.log("entrei");

			if (response.status === 200) {
				return response.data as LoginResponse;
			} else {
				throw new Error("Falha no login");
			}
		} catch (error) {
			throw error;
		}
	}
}

export default new UserService();
