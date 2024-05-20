import axiosInstance from "../common/axiosInstance";
import { iCreateResponse, iPubCommentsResponse } from "./types";

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

	async getComments(id: number): Promise<iPubCommentsResponse> {
		try {
			const response = await axiosInstance.get(
				`publicacao/${id}/comentarios/`
			);

			if (response.status === 200) {
				return response.data as iPubCommentsResponse;
			} else {
				throw new Error("Falha");
			}
		} catch (error) {
			throw error;
		}
	}
}

export default new PubliService();
