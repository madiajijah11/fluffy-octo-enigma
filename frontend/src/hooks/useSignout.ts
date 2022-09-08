import { useContext } from "react";
import { AuthContext } from "../context/authContext";

export const useSignout = () => {
	const { dispatch } = useContext(AuthContext);

	const signout = () => {
		sessionStorage.removeItem("user");
		dispatch({ type: "LOGOUT" });
	};
	return { signout };
};

