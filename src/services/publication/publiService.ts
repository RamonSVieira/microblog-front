import axiosInstance from "../common/axiosInstance";
import { iCreateResponse } from "./types";

class PubliService {
	async create(formData: FormData): Promise<iCreateResponse> {
		try {
			const response = await axiosInstance.post("publicacao/", formData);

			if (response.status === 201) {
				return response.data as iCreateResponse;
			} else {
				throw new Error("Falha no login");
			}
		} catch (error) {
			throw error;
		}
	}
}

export default new PubliService();
