import axiosInstance from "../common/axiosInstance";
import { FeedResponse } from "./types";

class FeedService {
	async get(page: number): Promise<FeedResponse> {
		try {
			const response = await axiosInstance.get(`/publicacao/?${page}`);

			console.log(response);

			if (response.status === 200) {
				return response.data as FeedResponse;
			} else {
				throw new Error("Falha");
			}
		} catch (error) {
			throw error;
		}
	}
}

export default new FeedService();
