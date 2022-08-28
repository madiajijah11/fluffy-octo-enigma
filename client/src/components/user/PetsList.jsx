import { useEffect, useState } from "react";

const PetsList = () => {
	const [pets, setPets] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		fetch("http://localhost:3000/api/pets")
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setPets(data);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
				setLoading(false);
			});
	}, []);

	if (!pets) {
		return <div>Loading...</div>;
	}

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<h1>Pets List</h1>
			{pets?.map((pet) => (
				<ul key={pet.id}>
					<li>{pet.name}</li>
					<li>{pet.age}</li>
					<li>{pet.breed}</li>
					<li>{pet.description}</li>
				</ul>
			))}
		</div>
	);
};

export default PetsList;
