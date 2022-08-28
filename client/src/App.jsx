import "./App.css";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import NavigationBar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

function App() {
	useEffect(() => {
		themeChange(false);
	}, []);
	return (
		<>
			<NavigationBar />
			<Hero />
			<Footer />
		</>
	);
}

export default App;
