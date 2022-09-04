import { useEffect, useState } from "react";
import Gallery from "react-photo-gallery";
import { photos } from "../dummy/photos";

const Home = () => {
	const [petData, setPetData]: any = useState([]);

	useEffect(() => {
		const fetchPets = async () => {
			const res = await fetch("http://localhost:3000/api/v1/pets");
			const pets = await res.json();
			console.log(pets);

			if (res.ok) {
				setPetData(pets);
			}
		};
		fetchPets();
	}, []);

	return (
		<div>
			<h1 className="text-9xl text-center font-bold">Home</h1>
			<Gallery photos={photos} />
		</div>
	);
};

export default Home;
