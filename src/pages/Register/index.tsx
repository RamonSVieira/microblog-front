import Button from "../../components/Button";
import imgLogin from "../../assets/images/login.png";
import UserService from "../../services/user/UserService";
import * as yup from "yup";

import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import "./style.css";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
	name: yup.string().required("O nome do usuário é um campo obrigatório"),
	username: yup.string().required("O nome de usuário é um campo obrigatório"),
	password: yup.string().required("A senha é um campo obrigatório"),
});

function Register() {
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	async function dataHandler(data: any) {
		try {
			await UserService.register(data.name, data.username, data.password);

			navigate("/login");
		} catch (error) {
			console.log("Dados inválidos");
		}
	}

	return (
		<div className="full">
			<div className="container row m-auto align-items-center">
				<div className="col">
					<h1>Cadastre-se</h1>
					<form
						onSubmit={handleSubmit(dataHandler)}
						className=" d-flex flex-column justify-content-center mr-10"
					>
						<div className="mb-3">
							<div
								className={`br-input input-highlight ${
									errors.name ? "danger" : ""
								}`}
							>
								<label
									className="sr-only"
									htmlFor="name"
								>
									Nome completo
								</label>
								<div className="input-group">
									<input
										className="input-highlight"
										id="name"
										type="search"
										placeholder="Ramon de Sousa Vieira"
										{...register("name")}
									/>
								</div>

								{errors.name !== undefined && (
									<span
										className="feedback danger"
										role="alert"
										id="danger"
									>
										<i
											className="fas fa-times-circle"
											aria-hidden="true"
										></i>
										{errors.name?.message}
									</span>
								)}
							</div>
						</div>
						<div className="mb-3">
							<div
								className={`br-input input-highlight ${
									errors.username ? "danger" : ""
								}`}
							>
								<label
									className="sr-only"
									htmlFor="username"
								>
									Username
								</label>
								<div className="input-group">
									<input
										className="input-highlight"
										id="username"
										type="search"
										placeholder="Sn4k3rx"
										{...register("username")}
									/>
								</div>

								{errors.username !== undefined && (
									<span
										className="feedback danger"
										role="alert"
										id="danger"
									>
										<i
											className="fas fa-times-circle"
											aria-hidden="true"
										></i>
										{errors.username?.message}
									</span>
								)}
							</div>
						</div>
						<div className="mb-3">
							<div
								className={`br-input input-highlight ${
									errors.password ? "danger" : ""
								}`}
							>
								<label
									className="sr-only"
									htmlFor="password"
								>
									Senha
								</label>
								<div className="input-group">
									<input
										className="input-highlight"
										id="password"
										type="password"
										placeholder="*******"
										{...register("password")}
									/>
								</div>

								{errors.password !== undefined && (
									<span
										className="feedback danger"
										role="alert"
										id="danger"
									>
										<i
											className="fas fa-times-circle"
											aria-hidden="true"
										></i>
										{errors.password?.message}
									</span>
								)}
							</div>
						</div>
						<Button label="Login" />
					</form>

					<p>
						Já possui uma conta? <Link to={"/login"}>Entre</Link>
					</p>
				</div>

				<div className="col justify-content-center img">
					<img
						src={imgLogin}
						alt="Imagem ilustrativa de computador"
					/>
				</div>
			</div>
		</div>
	);
}

export default Register;
