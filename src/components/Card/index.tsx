import { ICard } from "./types";
import FriendlyDate from "../../utils/FriendlyDate";
import { useAuth } from "../../context/AuthProvider/useAuth";
import { Link } from "react-router-dom";
import "./style.css";

export default function Card(props: ICard) {
	const auth = useAuth();

	return (
		<div className="col-3 px-1">
			<div className="br-card hover h-fixed">
				<div className="card-header d-flex flex-column">
					<span
						className="mt-1 d-flex justify-content-center"
						title="Fulano da Silva"
					>
						<span className="content flex-fill">
							<img
								className="rounder-md img-card"
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
					<p className="h3 m-0">{props.titulo}</p>
					<p>{props.descricao}</p>
					<p className="text-down-01">
						<FriendlyDate dateString={props.publicado_em} />
					</p>
				</div>
				<div className="card-footer">
					<div className="d-flex flex-row-reverse">
						<div>
							{auth.access ? (
								<button
									className="br-button primary"
									type="button"
								>
									Comentar
								</button>
							) : (
								<Link
									to={"/login"}
									className="br-button primary"
								>
									Comentar
								</Link>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
