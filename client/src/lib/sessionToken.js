// get token from sessionStorage

const sessionToken = () => {
	const user = JSON.parse(sessionStorage.getItem("user"));
	return user?.token;
};

export default sessionToken;
