import Button from "../../components/Button";
import imgLogin from "../../assets/images/login.png";
import { useForm } from "react-hook-form";
import UserService from "../../services/user/UserService";

import "./style.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider/useAuth";

function Login() {
	const navigate = useNavigate();
	const auth = useAuth();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	async function dataHandler(data: any) {
		try {
			await auth.authenticate(data.username, data.password);

			if (auth.access) {
				navigate("/feed");
			}
		} catch (error) {
			console.log("Email ou senha invalida");
		}
	}

	return (
		<div className="full">
			<div className="container row m-auto align-items-center">
				<div className="col">
					<h1>Seja bem vindo</h1>
					<form
						onSubmit={handleSubmit(dataHandler)}
						className=" d-flex flex-column justify-content-center mr-10"
					>
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

export default Login;
