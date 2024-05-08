import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider/useAuth";
import { useEffect } from "react";

export const ProtectedLayout = ({ children }: { children: JSX.Element }) => {
	const auth = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		if (!auth.access) {
			navigate("/login");
		}
	}, [auth.access, navigate]);

	return auth.access ? children : null;
};
