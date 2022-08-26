import "./App.css";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import NavigationBar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import UsersList from "./components/Users/PetsList";

function App() {
	useEffect(() => {
		console.log("useEffect");
		themeChange(false);
	}, []);
	return (
		<>
			<NavigationBar />
			{/* <UsersList /> */}
			<Hero />
			<Footer />
		</>
	);
}

export default App;
