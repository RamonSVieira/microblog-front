import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider/useAuth";

export default function Header() {
	const auth = useAuth();

	return (
		<header className="br-header compact">
			<div className="container-lg">
				<div className="header-top">
					<div className="header-actions">
						<span className="br-divider vertical mx-half mx-sm-1"></span>
						<div className="header-search-trigger">
							<button
								className="br-button circle"
								type="button"
								aria-label="Abrir Busca"
								data-toggle="search"
								data-target=".header-search"
							>
								<i
									className="fas fa-search"
									aria-hidden="true"
								></i>
							</button>
						</div>
						{!auth.access ? (
							<div className="header-login">
								<div className="header-sign-in">
									<Link
										to={"/login"}
										className="br-sign-in small mr-2"
										type="button"
										data-trigger="login"
									>
										<i
											className="fas fa-user"
											aria-hidden="true"
										></i>
										<span className="d-sm-inline">
											Entrar
										</span>
									</Link>

									<Link
										to={"/register"}
										className="br-sign-in small"
										type="button"
										data-trigger="login"
									>
										<i
											className="fas fa-sign-in-alt"
											aria-hidden="true"
										></i>
										<span className="d-sm-inline">
											Cadastre-se
										</span>
									</Link>
								</div>
								<div className="header-avatar"></div>
							</div>
						) : (
							<button
								onClick={auth.logout}
								className="br-sign-in small"
								type="button"
								data-trigger="login"
							>
								<i
									className="fas fa-sign-in-alt"
									aria-hidden="true"
								></i>
								<span className="d-sm-inline">Sair</span>
							</button>
						)}
					</div>
				</div>
				<div className="header-bottom">
					<div className="header-menu">
						<div className="header-info">
							<div className="header-title">Mini Blog</div>
							<div className="header-subtitle">Olá blogueiro</div>
						</div>
					</div>
					<div className="header-search">
						<div className="br-input has-icon">
							<label htmlFor="searchbox-68089">
								Texto da pesquisa
							</label>
							<input
								id="searchbox-68089"
								type="text"
								placeholder="O que você procura?"
							/>
							<button
								className="br-button circle small"
								type="button"
								aria-label="Pesquisar"
							>
								<i
									className="fas fa-search"
									aria-hidden="true"
								></i>
							</button>
						</div>
						<button
							className="br-button circle search-close ml-1"
							type="button"
							aria-label="Fechar Busca"
							data-dismiss="search"
						>
							<i
								className="fas fa-times"
								aria-hidden="true"
							></i>
						</button>
					</div>
				</div>
			</div>
		</header>
	);
}
