import { useLocation, useParams } from "react-router-dom";
import "./style.css";
import FriendlyDate from "../../../utils/FriendlyDate";
import { useEffect, useState } from "react";
import publiService from "../../../services/publication/publiService";
import { iPubComments } from "../../../services/publication/types";
import BrComment from "../../../components/BrComment";
import Header from "../../../components/Header";
import { IFeed } from "../../../services/feed/types";
import FeedService from "../../../services/feed/FeedService";

function Detail() {
	const [comments, setComments] = useState<iPubComments[]>([]);
	const [pub, setPub] = useState<IFeed>();
	const { id } = useParams();

	if (id === undefined) {
		return <p>ERROR</p>;
	}

	useEffect(() => {
		publiService.getComments(Number(id)).then((res) => {
			const { results } = res;
			setComments(results);
		});

		FeedService.getPub(Number(id)).then((res) => {
			setPub(res);
		});
	}, []);

	return (
		<>
			<Header />
			<div className="container">
				<div>
					<img
						className=""
						src={pub?.imagem}
						alt=""
					/>
					<h2>{pub?.titulo}</h2>
					<p>{pub?.descricao}</p>
					<p>
						Autor: {pub?.autor.nome} -{" "}
						{pub?.publicado_em ? (
							<FriendlyDate dateString={pub?.publicado_em} />
						) : (
							<span>Sem data de publicação</span>
						)}
					</p>
				</div>
				<div className="divider" />

				{comments?.length > 0 ? (
					comments.map((comment) => (
						<BrComment
							key={comment.id}
							nome={comment.autor.nome}
							message={comment.mensagem}
							data={comment.publicado_em}
						/>
					))
				) : (
					<h3>Nao há comentários</h3>
				)}
			</div>
		</>
	);
}

export default Detail;
