export interface LoginResponse {
	access: string;
	refresh: string;
	user: {
		id: number;
		username: string;
		nome: string;
	};
}

export interface RegisterResponse {
	id: number;
	username: string;
	nome: string;
}
