import { useUserPetsContext } from "../../hooks/useUserPetsContext";
import { useAuthContext } from "../../hooks/useAuthContext";

export function PetDetail({ userPets, setError }: any) {
	const { dispatch } = useUserPetsContext();
	const { user } = useAuthContext();

	const handleDeletePet = async (id: any) => {
		const response = await fetch(`${import.meta.env.VITE_BASE_API_URL}/api/v1/pets/${id}`, {
			method: "DELETE",
			headers: {
				Authorization: `Bearer ${user?.token}`,
				"Content-type": "application/json",
			},
		});
		const result = await response.json();
		if (response.ok) {
			dispatch({ type: "DELETE_USER_PET", payload: result });
		}
		if (!response.ok) {
			setError(result.message);
		}
	};

	return (
		<div className="flex flex-col justify-center content-center items-center">
			<section className="mt-4 mb-4 mx-auto w-10/12 relative">
				<div className="grid grid-cols-2 justify-center gap-3">
					{userPets?.map((pet: any) => (
						<div key={pet.id} className="card card-side bg-base-100 shadow-xl">
							<figure
								style={{
									maxWidth: "50%",
								}}>
								<img src={pet.src} alt={pet.name} />
							</figure>
							<div className="card-body">
								<div className="card-actions justify-end">
									<button
										className="btn btn-square btn-sm"
										onClick={() => handleDeletePet(pet.id)}>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-6 w-6"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M6 18L18 6M6 6l12 12"
											/>
										</svg>
									</button>
								</div>
								<h2 className="card-title">{pet.name}</h2>
								<p>Age: {pet.age}</p>
								<p>Type: {pet.type}</p>
								<p>Breed: {pet.breed}</p>
								<p>Description: {pet.description}</p>
							</div>
						</div>
					))}
				</div>
			</section>
		</div>
	);
}
