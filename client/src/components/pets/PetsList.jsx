import { useState } from "react";
import FormAddPet from "./FormAddPet";
import useSWR, { mutate } from "swr";
import { getPets, deletePetById } from "../../api/pets";

const PetsList = () => {
	const [showModal, setShowModal] = useState(false);
	const { data, error } = useSWR("/api/v1/pets", getPets);

	const showModalHandler = () => {
		setShowModal(true);
	};

	const handleDelete = async (id) => {
		await deletePetById(id);
		mutate(`/api/v1/pets`, getPets, false);
	};

	if (error) {
		return <div>Failed to fetch data!</div>;
	}
	if (!data) {
		return <div>No data found</div>;
	}

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
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{data?.data?.map((pet, index) => (
							<tr key={pet._id}>
								<td>{index + 1}</td>
								<td>{pet.name}</td>
								<td>{pet.age}</td>
								<td>{pet.type}</td>
								<td>{pet.breed}</td>
								<td>{pet.description}</td>
								<td>
									<button
										className="btn-warning btn-md"
										onClick={() => handleDelete(pet._id)}>
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default PetsList;
