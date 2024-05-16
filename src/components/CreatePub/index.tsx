import { useForm } from "react-hook-form";
import "./styles.css";
import Button from "../Button";
import publiService from "../../services/publication/publiService";
import Upload from "../Upload";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface iCreatePub {
	onSubmitSuccess: () => void;
}

const schema = yup.object().shape({
	title: yup.string().required("O campo título é obrigatório"),
	description: yup.string().required("O campo descrição é obrigatório"),
	image: yup.mixed(),
});

function CreatePub({ onSubmitSuccess }: iCreatePub) {
	const {
		handleSubmit,
		register,
		control,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const formData = new FormData();

	function dataHandler(data: any) {
		formData.append("titulo", data.title);
		formData.append("descricao", data.description);
		formData.append("imagem", data.image[0]);

		publiService
			.create(formData)
			.then(() => {
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
				<div className={`br-input ${errors.title ? "danger" : ""}`}>
					<label htmlFor="title">Título</label>
					<input
						id="title"
						type="text"
						placeholder="Bota de mr"
						{...register("title")}
					/>
				</div>
				{errors.title !== undefined && (
					<span
						className="feedback danger"
						role="alert"
						id="danger"
					>
						<i
							className="fas fa-times-circle"
							aria-hidden="true"
						></i>
						{errors.title?.message}
					</span>
				)}

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

				<Upload
					label="Imagem"
					name="image"
					control={control}
					// error={errors.imagem}
				/>

				<div className={`br-textarea ${errors.title ? "danger" : ""}`}>
					<label htmlFor="description">Descrição</label>
					<textarea
						id="description"
						placeholder="Pain Gaming amassando a loud na final do CBLOL"
						{...register("description")}
					></textarea>
					{errors.description !== undefined && (
						<span
							className="feedback danger"
							role="alert"
							id="danger"
						>
							<i
								className="fas fa-times-circle"
								aria-hidden="true"
							></i>
							{errors.description?.message}
						</span>
					)}
				</div>

				<Button label="Enviar" />
			</form>
		</>
	);
}

export default CreatePub;
