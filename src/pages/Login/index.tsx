import Button from "../../components/Button";
import Input from "../../components/Input";
import imgLogin from "../../assets/images/login.png";
import "./style.css";

function Login() {
	function oi() {
		console.log("cliquei");
	}

	return (
		<div className="full">
			<div className="container row m-auto align-items-center">
				<form
					action=""
					className="col d-flex flex-column justify-content-center mr-10"
				>
					<Input
						label="Nome de Usuário"
						placeholder="sn4k3rx"
						className="mb-3"
					/>
					<Input
						label="Senha"
						placeholder="********"
						className="mb-3"
						afterIcon=""
					/>
					<Button
						label="Login"
						action={oi}
					/>
				</form>

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
