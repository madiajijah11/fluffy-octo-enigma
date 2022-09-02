import { FormInputPet } from "./FormAddPet";
import React, { useRef, useState } from "react";
import { addPet, getPets } from "../../api/pets";
import { mutate } from "swr";

function FormAddPet({ setShowModal }) {
	const [isError, setIsError] = useState(false);

	const nameRef = useRef();
	const ageRef = useRef();
	const typeRef = useRef();
	const breedRef = useRef();
	const descriptionRef = useRef();

	const closeModalHandler = () => {
		setShowModal(false);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const name = nameRef.current.value;
		const age = ageRef.current.value;
		const type = typeRef.current.value;
		const breed = breedRef.current.value;
		const description = descriptionRef.current.value;
		try {
			await addPet({ name, age, type, breed, description });
			mutate("/api/v1/pets", getPets, false);
			nameRef.current.value = "";
			ageRef.current.value = "";
			typeRef.current.value = "";
			breedRef.current.value = "";
			descriptionRef.current.value = "";
			setIsError(false);
			closeModalHandler();
		} catch (error) {
			setIsError(true);
		}
	};

	return (
		<div className="modal-box w-11/12 max-w-5xl">
			<div>
				<button
					className="btn btn-sm btn-circle absolute right-2 top-2"
					onClick={closeModalHandler}>
					&times;
				</button>
			</div>
			<div>
				<h1 className="text-2xl text-center">Add New Pet</h1>
				<FormInputPet
					handleSubmit={handleSubmit}
					nameRef={nameRef}
					ageRef={ageRef}
					typeRef={typeRef}
					breedRef={breedRef}
					descriptionRef={descriptionRef}
					isError={isError}
				/>
			</div>
		</div>
	);
}

export default FormAddPet;
