export interface IFeed {
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

export interface IFeedResponse {
	count: number;
	next: string;
	previous: string;
	results: IFeed[];
}
