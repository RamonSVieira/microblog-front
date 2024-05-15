import { iModal } from "./types";
import "./style.css";

function Modal(props: iModal) {
	if (props.isOpen) {
		return (
			<div className="bg-modal">
				<div className="modal">
					<div>{props.children}</div>
					<div
						onClick={props.setOpenModal}
						className="close-modal"
					>
						Fechar
					</div>
				</div>
			</div>
		);
	}
}

export default Modal;
