import { useEffect, useState } from "react";
import Header from "../../components/Header";
import { IFeed } from "../../services/feed/types";
import FeedService from "../../services/feed/FeedService";
import Card from "../../components/Card";

import "./style.css";

function Feed() {
	const [pubs, setPubs] = useState<IFeed[]>([]);

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

	return (
		<div>
			<Header />

			<div className="container d-flex mt-4 flex-wrap">
				{pubs ? (
					pubs.map((pub) => (
						<Card
							key={pub.id}
							titulo={pub.titulo}
							descricao={pub.descricao}
							autor={pub.autor}
							imagem={pub.imagem}
							publicado_em={pub.publicado_em}
						/>
					))
				) : (
					<h1>oi</h1>
				)}
			</div>
		</div>
	);
}

export default Feed;
