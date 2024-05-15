import { useForm } from "react-hook-form";
import "./styles.css";
import Button from "../Button";
import publiService from "../../services/publication/publiService";

interface iCreatePub {
	onSubmitSuccess: () => void;
}

function CreatePub({ onSubmitSuccess }: iCreatePub) {
	const { handleSubmit, register } = useForm();

	const formData = new FormData();

	function dataHandler(data: any) {
		formData.append("titulo", data.title);
		formData.append("descricao", data.description);
		formData.append("imagem", data.imagem[0]);

		publiService
			.create(formData)
			.then(() => {
				// Se o envio for bem-sucedido, chame onSubmitSuccess
				onSubmitSuccess();
			})
			.catch((error) => {
				console.error("Erro ao criar publicação:", error);
			});
	}

	return (
		<>
			<h3>Cadastrar nova Publicação</h3>
			<form
				action=""
				onSubmit={handleSubmit(dataHandler)}
			>
				<div className="br-input">
					<label htmlFor="title">Título</label>
					<input
						id="title"
						type="text"
						placeholder="Bota de mr"
						{...register("title")}
					/>
				</div>

				{/* <div className="br-upload">
					<label
						className="upload-label"
						htmlFor="single-file"
					>
						<span>Envio de arquivo</span>
					</label>
					<input
						className="upload-input"
						id="single-file"
						type="file"
						aria-label="enviar arquivo"
						{...register("image")}
					/>
					<button
						className="upload-button"
						type="button"
						aria-hidden="true"
					>
						<i
							className="fas fa-upload"
							aria-hidden="true"
						></i>
						<span>Selecione o arquivo</span>
					</button>

					<div className="upload-list"></div>
				</div> */}

				<input
					type="file"
					{...register("imagem")}
				/>

				<div className="br-textarea">
					<label htmlFor="description">Descrição</label>
					<textarea
						id="description"
						placeholder="Pain Gaming amassando a loud na final do CBLOL"
						{...register("description")}
					></textarea>
				</div>

				<Button label="Enviar" />
			</form>
		</>
	);
}

export default CreatePub;
