interface LoginResponse {
	access: string;
	token: string;
	user: {
		id: number;
		username: string;
		nome: string;
	};
}

export default LoginResponse;
