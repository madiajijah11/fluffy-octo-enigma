import fetcher from "../../lib/axiosInstance";

export const userLogin = () => {
	return fetcher.post("/auth/login");
};
