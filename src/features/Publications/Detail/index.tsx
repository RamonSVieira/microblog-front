import { useParams } from "react-router-dom";
import "./style.css";
import { FriendlyDate } from "../../../utils/FriendlyDate";
import { useEffect, useState } from "react";
import publiService from "../../../services/publication/publiService";
import { iPubComments } from "../../../services/publication/types";
import BrComment from "../../../components/BrComment";
import Header from "../../../components/Header";
import { IFeed } from "../../../services/feed/types";
import FeedService from "../../../services/feed/FeedService";
import Button from "../../../components/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
	comment: yup.string().required("O comentário deve ser preenchido"),
});

function Detail() {
	const [comments, setComments] = useState<iPubComments[]>([]);
	const [pub, setPub] = useState<IFeed>();

	const { id } = useParams();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	if (id === undefined) {
		return <p>ERROR</p>;
	}

	async function dataHandler(data: any) {
		try {
			const response = await publiService.comment(
				Number(id),
				data.comment
			);

			comments.unshift(response);
			console.log(comments);
		} catch (error) {
			console.log("Nao foi possível comentar");
		}
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
							FriendlyDate(pub?.publicado_em)
						) : (
							<span>Sem data de publicação</span>
						)}
					</p>
				</div>
				<div className="divider" />

				<form
					action=""
					onSubmit={handleSubmit(dataHandler)}
				>
					<div className="br-textarea mt-4">
						<label htmlFor="comment">Deixe seu comentário</label>
						<textarea
							id="comment"
							placeholder="Exemplo de textarea simples"
							{...register("comment")}
						></textarea>
					</div>

					<Button label="Comentar" />
				</form>

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
