import { useEffect, useState } from "react";

const PetsList = () => {
	const [pets, setPets] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		fetch("http://localhost:3000/api/pets")
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setPets(data);
				setIsLoading(false);
			})
			.catch((err) => {
				console.log(err);
				setIsLoading(false);
			});
	}, []);

	if (!pets) {
		return <div>Loading...</div>;
	}

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<table className="table w-full">
				<thead>
					<tr>
						<th>No</th>
						<th>Name</th>
						<th>Age</th>
						<th>Breed</th>
						<th>Description</th>
					</tr>
				</thead>
				<tbody>
					{pets?.map((pet, index) => (
						<tr key={pet._id}>
							<td>{index + 1}</td>
							<td>{pet.name}</td>
							<td>{pet.age}</td>
							<td>{pet.breed}</td>
							<td>{pet.description}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default PetsList;
