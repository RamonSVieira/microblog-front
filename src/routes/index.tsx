import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import { ProtectedLayout } from "./protected";
import Feed from "../pages/Feed/indext";

function Rotas() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/login"
					element={<Login />}
				/>
				<Route
					path="/profile"
					element={
						<ProtectedLayout>
							<Feed />
						</ProtectedLayout>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default Rotas;
