import { useEffect, useState } from "react";
import Header from "../../components/Header";
import { FeedResponse } from "../../services/feed/types";
import FeedService from "../../services/feed/FeedService";

function Feed() {
	const [pubs, setPubs] = useState<FeedResponse[]>([]);

	const page = 1;

	function handleData() {
		FeedService.get(page).then((res) => {
			console.log(res);
		});
	}

	useEffect(() => {
		handleData();
	}, []);

	return (
		<div>
			<Header />
			FEED
		</div>
	);
}

export default Feed;
