import { useState } from "react";
import "./AddPet.css";
import { usePetsContext } from "../../hooks/usePetsContext";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useUserPetsContext } from "../../hooks/useUserPetsContext";

const AddPet = ({ setIsShowAddPetForm }: any) => {
	const { dispatch } = usePetsContext();
	const { user } = useAuthContext();
	const { dispatch: userPetsDispatch }: any = useUserPetsContext();

	const [src, setSrc] = useState("");
	const [name, setName] = useState("");
	const [age, setAge] = useState<number | string>("");
	const [type, setType] = useState("");
	const [breed, setBreed] = useState("");
	const [description, setDescription] = useState("");
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (event: any) => {
		event.preventDefault();
		if (!user) {
			setError("You must be logged in to post a pet");
			return;
		}
		setLoading(true);
		const pet = { src, name, age, type, breed, description, owner: user?.id };
		const response = await fetch(`${import.meta.env.VITE_BASE_API_URL}/api/v1/pets`, {
			method: "POST",
			headers: {
				Authorization: `Bearer ${user?.token}`,
				"Content-type": "application/json",
			},
			body: JSON.stringify(pet),
		});
		const result = await response.json();
		if (!response.ok) {
			setError(result.message);
			setLoading(false);
		}
		if (response.ok) {
			dispatch({ type: "ADD_PET", payload: result });
			userPetsDispatch({ type: "ADD_USER_PET", payload: result });
			setSrc("");
			setName("");
			setAge("");
			setType("");
			setBreed("");
			setDescription("");
			setLoading(false);
			setIsShowAddPetForm(false);
		}
	};

	return (
		<div className="mainModal">
			<div className="modal-box w-11/12 max-w-5xl">
				<button
					className="btn btn-warning btn-sm btn-square absolute right-2 top-2"
					onClick={() => setIsShowAddPetForm(false)}>
					X
				</button>
				<div>
					<form onSubmit={handleSubmit}>
						{error && <p className="text-red-500">{error}</p>}
						<div className="form-control">
							<label className="label">
								<span className="label-text">Your Pet Image URL</span>
							</label>
							<input
								name="src"
								type="url"
								className="input input-bordered"
								value={src}
								onChange={(event) => setSrc(event.target.value)}
								required
								autoComplete="off"
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Your Pet Name</span>
							</label>
							<input
								name="name"
								type="text"
								className="input input-bordered"
								value={name}
								onChange={(event) => setName(event.target.value)}
								required
								autoComplete="off"
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Your Pet Age</span>
							</label>
							<input
								name="age"
								type="number"
								className="input input-bordered"
								value={age}
								onChange={(event) => setAge(parseInt(event.target.value))}
								required
								autoComplete="off"
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Your Pet Type</span>
							</label>
							<input
								name="type"
								type="text"
								className="input input-bordered"
								value={type}
								onChange={(event) => setType(event.target.value)}
								required
								autoComplete="off"
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Your Pet Breed</span>
							</label>
							<input
								name="breed"
								type="text"
								className="input input-bordered"
								value={breed}
								onChange={(event) => setBreed(event.target.value)}
								required
								autoComplete="off"
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Your Pet Description</span>
							</label>
							<textarea
								className="textarea textarea-bordered"
								name="description"
								rows={5}
								value={description}
								onChange={(event) => setDescription(event.target.value)}
								required
							/>
						</div>
						<div className="form-control hidden">
							<label className="label">
								<span className="label-text">Pet Owner</span>
							</label>
							<input
								name="owner"
								type="id"
								className="input input-bordered"
								value={user.id}
								required
								disabled
							/>
						</div>
						<div className="form-control">
							<button
								type="submit"
								disabled={loading}
								className="btn btn-success mt-3">
								Post your favorite pet, let people know!
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AddPet;
