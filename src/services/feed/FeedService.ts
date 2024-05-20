import axiosInstance from "../common/axiosInstance";
import { IFeed, IFeedResponse } from "./types";

class FeedService {
	async get(page: number): Promise<IFeedResponse> {
		try {
			const response = await axiosInstance.get(`/publicacao/?${page}`);

			if (response.status === 200) {
				return response.data as IFeedResponse;
			} else {
				throw new Error("Falha");
			}
		} catch (error) {
			throw error;
		}
	}

	async getPub(id: number): Promise<IFeed> {
		try {
			const response = await axiosInstance.get(`/publicacao/${id}/`);

			if (response.status === 200) {
				return response.data as IFeed;
			} else {
				throw new Error("Falha");
			}
		} catch (error) {
			throw error;
		}
	}
}

export default new FeedService();
