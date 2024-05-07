import Button from "../../components/Button";
import imgLogin from "../../assets/images/login.png";
import { useForm } from "react-hook-form";

import "./style.css";
import { useNavigate } from "react-router-dom";
import UserService from "../../services/user/UserService";
import { useAuth } from "../../context/AuthProvider/useAuth";

function Register() {
	const navigate = useNavigate();
	const auth = useAuth();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

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
							<div className="br-input input-highlight">
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
							</div>
						</div>
						<div className="mb-3">
							<div className="br-input input-highlight">
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
							</div>
						</div>
						<div className="mb-3">
							<div className="br-input input-highlight">
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
							</div>
						</div>
						<Button label="Login" />
					</form>
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
