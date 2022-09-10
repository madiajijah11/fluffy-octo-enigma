import { useEffect, useState } from "react";
import Gallery from "react-photo-gallery";
import { usePetsContext } from "../hooks/usePetsContext";

const Home = () => {
	const { pets, dispatch } = usePetsContext();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchPets = async () => {
			const response = await fetch(`${import.meta.env.VITE_BASE_API_URL}/api/v1/pets`);
			const result = await response.json();
			if (response.ok) {
				dispatch({ type: "SET_PETS", payload: result });
				setLoading(false);
			}
			if (!response.ok) {
				setError(result.message);
				setLoading(false);
			}
		};
		fetchPets();
	}, []);

	return (
		<>
			<div className="flex flex-col">
				<h4 className="text-4xl text-center my-2">Ours Lovely Pets</h4>
			</div>
			{loading && (
				<div className="flex justify-center content-center my-5">
					<progress className="progress progress-info w-56" />
				</div>
			)}
			{error && <h1 className="text-8xl text-center my-2">{error}</h1>}
			<div>
				<Gallery photos={pets} />
			</div>
		</>
	);
};

export default Home;
