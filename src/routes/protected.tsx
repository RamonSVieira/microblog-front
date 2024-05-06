import { useAuth } from "../context/AuthProvider/useAuth";

export const ProtectedLayout = ({ children }: { children: JSX.Element }) => {
	const auth = useAuth();

	console.log(auth);

	if (!auth.access) {
		return <h1>VOCÊ NÃO ESTÁ LOGADO</h1>;
	}

	return children;
};
