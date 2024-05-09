import "./style.css";

interface ICard {
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

export default function Card(props: ICard) {
	return (
		<div className="col-3">
			<div className="br-card hover h-fixed">
				<div className="card-header d-flex flex-column">
					<span
						className="mt-1 d-flex justify-content-center"
						title="Fulano da Silva"
					>
						<span className="content flex-fill">
							<img
								className="rounder-md"
								src={props.imagem}
							/>
						</span>
					</span>
					<div className="d-flex">
						<div>
							<div className="text-weight-semi-bold text-up-02">
								{props.autor.nome}
							</div>
							<div>{props.autor.username}</div>
						</div>
					</div>
				</div>
				<div className="card-content">
					<p>{props.descricao}</p>
					<p className="text-down-01">{props.publicado_em}</p>
				</div>
				<div className="card-footer">
					<div className="d-flex flex-row-reverse">
						<div>
							<button
								className="br-button"
								type="button"
							>
								Comentar
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
