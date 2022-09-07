import { useEffect, useState } from "react";
import Gallery from "react-photo-gallery";
import AddPet from "../components/pets/AddPet";
import { usePetsContext } from "../hooks/usePets";

const Home = () => {
	const { pets, dispatch } = usePetsContext();

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
				<h4 className="text-4xl text-center">Ours Lovely Pets</h4>
				<button
					onClick={() => setIsShowAddPetForm(true)}
					className="btn btn-accent btn-sm self-end my-5 mx-5">
					Add your favorite pet
				</button>
			</div>
			<div>
				{isShowAddPetForm && <AddPet setIsShowAddPetForm={setIsShowAddPetForm} />}
				{pets ? <Gallery photos={pets} /> : <progress className="progress w-56" />}
			</div>
		</>
	);
};

export default Home;
