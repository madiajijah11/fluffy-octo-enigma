import axios from "axios";

const fetcher = axios.create({
	baseURL: import.meta.env.VITE_BASE_URL,
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
	},
});

export default fetcher;
