import React from "react";

export function FormInputPet({
	handleSubmit,
	nameRef,
	ageRef,
	typeRef,
	breedRef,
	descriptionRef,
	isError,
}) {
	return (
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
	);
}
