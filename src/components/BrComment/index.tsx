import { iBrComment } from "./types";
import "./style.css";
import { formatTimeAgo } from "../../utils/FriendlyDate";

function BrComment(props: iBrComment) {
	function formatDate(date: string) {}

	return (
		<div className="pl-4 mt-4 d-flex align-items-center">
			<span
				className="br-avatar mr-3"
				title={props.nome}
			>
				<span className="content">
					<i
						className="fas fa-user"
						aria-hidden="true"
					></i>
				</span>
			</span>

			<p className="text-bold mr-2 mb-0">{props.nome}</p>
			<p className="mr-2 mb-0 nowrap">{formatTimeAgo(props.data)}</p>
			<p className="mb-0">{props.message}</p>
		</div>
	);
}

export default BrComment;
