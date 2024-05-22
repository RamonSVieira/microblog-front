export interface iCreateResponse {
	id: number;
	titulo: string;
	imagem: string;
	descricao: string;
	autor: {
		id: number;
		username: string;
		nome: string;
	};
	publicado_em: string;
}

export interface iPubComments {
	id: number;
	autor: {
		id: number;
		username: string;
		nome: string;
	};
	publicacao: number;
	mensagem: string;
	publicado_em: string;
}

export interface iPubCommentsResponse {
	count: number;
	next: string;
	previous: string;
	results: iPubComments[];
}

export interface iCreateCommentResponse {
	id: number;
	autor: {
		id: number;
		username: string;
		nome: string;
	};
	publicacao: number;
	mensagem: string;
	publicado_em: string;
}
