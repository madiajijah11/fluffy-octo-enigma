import fetcher from "../../lib/axiosInstance";

export const userLogin = () => {
	return fetcher.get("/auth/login");
};
