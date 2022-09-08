import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { themeChange } from "theme-change";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";

function App() {
	useEffect(() => {
		themeChange(false);
	}, []);

	return (
		<div className="App">
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/signin" element={<Signin />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
