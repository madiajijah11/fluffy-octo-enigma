import { useEffect, useState } from "react";
import Gallery from "react-photo-gallery";
import AddPet from "../components/pets/AddPet";
// import { photos } from "../dummy/photos";

const Home = () => {
	const [petData, setPetData]: any = useState([]);
	const [isShowAddPetForm, setIsShowAddPetForm] = useState(false);

	useEffect(() => {
		const fetchPets = async () => {
			const res = await fetch(`${import.meta.env.VITE_BASE_API_URL}/api/v1/pets`);
			const pets = await res.json();

			if (res.ok) {
				setPetData(pets);
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
				<Gallery photos={petData} />
			</div>
		</>
	);
};

export default Home;
