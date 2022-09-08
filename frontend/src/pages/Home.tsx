import { useEffect, useState } from "react";
import Gallery from "react-photo-gallery";
import AddPet from "../components/pets/AddPet";
import { usePetsContext } from "../hooks/usePetsContext";
import { useAuthContext } from "../hooks/useAuthContext";

const Home = () => {
	const { pets, dispatch } = usePetsContext();
	const { user } = useAuthContext();

	const [isShowAddPetForm, setIsShowAddPetForm] = useState(false);

	useEffect(() => {
		const fetchPets = async () => {
			const response = await fetch(`${import.meta.env.VITE_BASE_API_URL}/api/v1/pets`);
			const result = await response.json();
			if (response.ok) {
				dispatch({ type: "SET_PETS", payload: result });
			}
			if (!response.ok) {
				console.log(result.message);
			}
		};
		fetchPets();
	}, []);

	return (
		<>
			<div className="flex flex-col">
				<h4 className="text-4xl text-center my-2">Ours Lovely Pets</h4>
				{user && (
					<button
						onClick={() => setIsShowAddPetForm(true)}
						className="btn btn-accent btn-sm self-end mx-5">
						Post your favorite pet
					</button>
				)}
				<hr className="my-2" />
			</div>
			<div>
				{isShowAddPetForm && <AddPet setIsShowAddPetForm={setIsShowAddPetForm} />}
				{pets ? <Gallery photos={pets} /> : <progress className="progress w-56" />}
			</div>
		</>
	);
};

export default Home;
