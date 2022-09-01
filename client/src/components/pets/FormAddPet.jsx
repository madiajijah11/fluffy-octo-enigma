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
				<form className="card-body" onSubmit={handleSubmit}>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Name</span>
						</label>
						<input
							ref={nameRef}
							required
							name="name"
							type="text"
							placeholder="name"
							className="input input-bordered"
						/>
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Age</span>
						</label>
						<input
							ref={ageRef}
							required
							name="age"
							type="number"
							placeholder="age"
							className="input input-bordered"
						/>
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Type</span>
						</label>
						<input
							ref={typeRef}
							required
							name="type"
							type="text"
							placeholder="type"
							className="input input-bordered"
						/>
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Breed</span>
						</label>
						<input
							ref={breedRef}
							required
							name="breed"
							type="text"
							placeholder="breed"
							className="input input-bordered"
						/>
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Description</span>
						</label>
						<input
							ref={descriptionRef}
							required
							name="description"
							type="text"
							placeholder="description"
							className="input input-bordered"
						/>
					</div>
					{isError && (
						<div className="text-red-500 text-center">
							<p>Something went wrong</p>
						</div>
					)}
					<div className="form-control">
						<button className="btn btn-primary" type="submit">
							Add Pet
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default FormAddPet;
