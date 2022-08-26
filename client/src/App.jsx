import "./App.css";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import NavigationBar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Sidebar from "./components/Users/Sidebar";
import Login from "./components/Users/Login";
import Signup from "./components/Users/Signup";
import UsersList from "./components/Users/PetsList";

function App() {
	useEffect(() => {
		themeChange(false);
		// 👆 false parameter is required for react project
	}, []);
	return (
		<>
			<NavigationBar />
			{/* <UsersList /> */}
			<Hero />
			<Footer />
			{/* <Sidebar /> */}
			{/* <Login /> */}
			{/* <Signup /> */}
		</>
	);
}

export default App;
