import { AuthProvider } from "./context/AuthProvider";
import Rotas from "./routes";

function App() {
	return (
		<>
			<AuthProvider>
				<Rotas />
			</AuthProvider>
		</>
	);
}

export default App;
