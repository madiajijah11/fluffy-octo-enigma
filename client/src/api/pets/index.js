import fetcher from "../../lib/axiosInstance";

export const getPets = () => {
	return fetcher.get("/api/v1/pets");
};

export const deletePetById = (id) => {
	return fetcher.delete(`/api/v1/pets/${id}`);
};

export const addPet = (pet) => {
	return fetcher.post("/api/v1/pets", pet);
};
