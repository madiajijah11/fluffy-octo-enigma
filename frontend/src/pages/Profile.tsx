import { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useUserPetsContext } from "../hooks/useUserPetsContext";
import AddPet from "../components/pets/AddPet";
import InfiniteScroll from "react-infinite-scroll-component";

const Profile = () => {
	const { user } = useAuthContext();
	const { userPets, dispatch }: any = useUserPetsContext();

	const [hasMoreItems, setHasMoreItems] = useState(true);
	const [isShowAddPetForm, setIsShowAddPetForm] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchUserPets = async () => {
			const response = await fetch(
				`${import.meta.env.VITE_BASE_API_URL}/api/v1/pets/${user?.id}`,
				{
					method: "GET",
					headers: {
						Authorization: `Bearer ${user?.token}`,
						"Content-type": "application/json",
					},
				}
			);
			const result = await response.json();
			if (response.ok) {
				dispatch({ type: "SET_USER_PETS", payload: result });
				setLoading(false);
			}
			if (!response.ok) {
				setError(result.message);
				setLoading(false);
			}
		};
		fetchUserPets();
	}, []);

	return (
		<div>
			<h1 className="text-4xl text-center my-2">Profile</h1>
			<div className="flex flex-col">
				{user && (
					<button
						onClick={() => setIsShowAddPetForm(true)}
						className="btn btn-accent btn-sm self-end mx-5">
						Post your favorite pet
					</button>
				)}
			</div>
			<div>
				{isShowAddPetForm && <AddPet setIsShowAddPetForm={setIsShowAddPetForm} />}
				{loading && (
					<div className="flex justify-center content-center my-5">
						<progress className="progress progress-info w-56" />
					</div>
				)}
				{error && <h1 className="text-8xl text-center my-2">{error}</h1>}
				<div className="flex flex-col justify-center content-center">
					{userPets.map((pet: any) => (
						<div
							key={pet.id}
							className="card card-side bg-base-100 shadow-xl my-3 mx-3"
							style={{ maxHeight: "300px", maxWidth: "1000px" }}>
							<figure style={{ maxWidth: "500px" }}>
								<img src={pet.src} alt={pet.name} />
							</figure>
							<div className="card-body">
								<div className="card-actions justify-end">
									<button className="btn btn-square btn-sm">
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
			</div>
		</div>
	);
};

export default Profile;
