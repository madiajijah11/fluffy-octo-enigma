import PetsList from "../pets/PetsList";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import sessionToken from "../../lib/sessionToken";

export default function Dashboard() {
	const navigate = useNavigate();
	const user = sessionToken();

	const Logout = () => {
		sessionStorage.removeItem("user");
		navigate("/");
	};

	useEffect(() => {
		if (!user) {
			navigate("/");
		}
	}, []);

	return (
		<>
			<div className="drawer drawer-mobile">
				<input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
				<div className="drawer-content flex flex-col items-center justify-center">
					{/* Page content here */}
					<label
						htmlFor="my-drawer-2"
						className="btn btn-primary drawer-button lg:hidden">
						Open drawer
					</label>
					<PetsList />
				</div>
				<div className="drawer-side">
					<label htmlFor="my-drawer-2" className="drawer-overlay"></label>
					<ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
						{/* Sidebar content here */}
						<li>
							<a>Pets</a>
						</li>
						<li>
							<a>Goodie</a>
						</li>
						<li>
							<a onClick={() => Logout()}>Logout</a>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}
