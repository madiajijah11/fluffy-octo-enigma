import { useState } from "react";
import FormAddPet from "./AddPetModal";
import useSWR from "swr";
import { getPets, deletePetById } from "../../api/pets";

const PetsList = () => {
	const [showModal, setShowModal] = useState(false);
	const { data, error, mutate } = useSWR("/api/v1/pets", getPets);

	const showModalHandler = () => {
		setShowModal(true);
	};

	const handleDelete = async (id) => {
		await deletePetById(id);
		mutate(`/api/v1/pets`, getPets, false);
	};

	if (!data) {
		return <div>No data found</div>;
	}
	if (error) {
		return <div>Failed to fetch data!</div>;
	}

	return (
		<div className="container h-screen">
			<div style={{ display: showModal ? "block" : "none" }}>
				<FormAddPet setShowModal={setShowModal} />
			</div>
			<div style={{ display: showModal ? "none" : "block" }} className="pl-6 pr-6">
				<div className="mt-5 mb-5">
					<button className="btn btn-primary btn-md" onClick={showModalHandler}>
						Add Pet +
					</button>
				</div>
				<table className="table table-compact w-full">
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
							<tr key={pet._id} className="hover">
								<td>{index + 1}</td>
								<td>{pet.name}</td>
								<td>{pet.age}</td>
								<td>{pet.type}</td>
								<td>{pet.breed}</td>
								<td>{pet.description}</td>
								<td>
									<div className="btn-group">
										<button className="btn btn-warning btn-md">Edit</button>
										<button
											className="btn btn-error btn-md"
											onClick={() => handleDelete(pet._id)}>
											Delete
										</button>
									</div>
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
