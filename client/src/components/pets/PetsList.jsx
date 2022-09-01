import { useEffect, useState } from "react";
import FormAddPet from "./FormAddPet";
import fetcher from "../../lib/axiosInstance";

const PetsList = () => {
	const [pets, setPets] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		fetcher
			.get("/api/pets")
			.then((res) => {
				setPets(res.data);
				setIsLoading(false);
			})
			.catch((err) => {
				setIsLoading(false);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, []);

	if (!pets) {
		return <div>Loading...</div>;
	}

	if (isLoading) {
		return <div>Loading...</div>;
	}

	const showModalHandler = () => {
		setShowModal(true);
	};

	return (
		<div>
			<div style={{ display: showModal ? "block" : "none" }}>
				<FormAddPet setShowModal={setShowModal} />
			</div>
			<div style={{ display: showModal ? "none" : "block" }}>
				<div>
					<button className="btn-primary btn-md" onClick={showModalHandler}>
						Add Pet +
					</button>
				</div>
				<table className="table w-full">
					<thead>
						<tr>
							<th>No</th>
							<th>Name</th>
							<th>Age</th>
							<th>Type</th>
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
								<td>{pet.type}</td>
								<td>{pet.breed}</td>
								<td>{pet.description}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default PetsList;
