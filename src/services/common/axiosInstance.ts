import axios from "axios";

const axiosInstance = axios.create({
	baseURL: "http://localhost:8000/",
});

function getToken(): string | null {
	return localStorage.getItem("access");
}

axiosInstance.interceptors.request.use(
	(config) => {
		const accessToken = getToken();

		if (accessToken != null) {
			config.headers.Authorization = `Bearer ${accessToken}`;
		}
		return config;
	},
	async (error) => {
		await Promise.reject(error);
	}
);

export default axiosInstance;
