import axios from "axios";
import sessionToken from "./sessionToken";

const fetcher = axios.create({
	baseURL: import.meta.env.VITE_BASE_URL,
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
		authorization: sessionToken(),
	},
});

export default fetcher;
