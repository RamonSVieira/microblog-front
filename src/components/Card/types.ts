export interface ICard {
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
