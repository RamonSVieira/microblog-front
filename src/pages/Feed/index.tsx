import { useEffect, useState } from "react";
import { IFeed } from "../../services/feed/types";

import Header from "../../components/Header";
import FeedService from "../../services/feed/FeedService";
import Card from "../../components/Card";
import Modal from "../../components/Modal";

import "./style.css";
import CreatePub from "../../components/CreatePub";
import { Link } from "react-router-dom";

function Feed() {
	const [pubs, setPubs] = useState<IFeed[]>([]);
	const [openModal, setOpenModal] = useState(false);

	const page = 1;
	function handleData() {
		FeedService.get(page)
			.then((res) => {
				const { results } = res;
				setPubs(results);
			})
			.catch((err) => {
				console.error(err);
			});
	}

	useEffect(() => {
		handleData();
	}, []);

	function refreshFeed() {
		handleData();
		setOpenModal(false);
	}

	return (
		<>
			<Header />

			<div className="container d-flex mt-4 flex-wrap">
				<div
					className="col-3 create card"
					onClick={() => setOpenModal(true)}
				>
					<div className="h-fixed">
						<i className="fas fa-plus-circle"></i>
					</div>
				</div>

				{pubs ? (
					pubs.map((pub) => (
						<Link
							to={`/pub/${pub.id}/details`}
							state={pub}
							className="col-3"
						>
							<Card
								key={pub.id}
								titulo={pub.titulo}
								descricao={pub.descricao}
								autor={pub.autor}
								imagem={pub.imagem}
								publicado_em={pub.publicado_em}
							/>
						</Link>
					))
				) : (
					<h1>Não existem publicações</h1>
				)}
			</div>

			<Modal
				isOpen={openModal}
				setOpenModal={() => setOpenModal(!openModal)}
			>
				<CreatePub onSubmitSuccess={refreshFeed} />
			</Modal>
		</>
	);
}

export default Feed;
