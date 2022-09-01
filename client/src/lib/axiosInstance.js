import axios from "axios";

const user = JSON.parse(sessionStorage.getItem("user"));

const fetcher = axios.create({
	baseURL: import.meta.env.VITE_BASE_URL,
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
		authorization: user.token,
	},
});

export default fetcher;
