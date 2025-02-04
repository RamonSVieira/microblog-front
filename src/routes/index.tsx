import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import { ProtectedLayout } from "./protected";
import Feed from "../pages/Feed";
import Register from "../pages/Register";
import Detail from "../features/Publications/Detail";

function Rotas() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/login"
					element={<Login />}
				/>
				<Route
					path="/register"
					element={<Register />}
				/>
				<Route
					path="/feed"
					element={<Feed />}
				/>

				<Route
					path="/pub/:id/details"
					element={<Detail />}
				/>

				{/* <Route
					path="/feed"
					element={
						<ProtectedLayout>
							<Feed />
						</ProtectedLayout>
					}
				/> */}
			</Routes>
		</BrowserRouter>
	);
}

export default Rotas;
