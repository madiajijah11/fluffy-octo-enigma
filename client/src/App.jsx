import "./App.css";
import NavigationBar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import Sidebar from "./components/Users/Sidebar";

function App() {
	return (
		<>
			<NavigationBar />
			<Hero />
			<Testimonials />
			<Footer />
			{/* <Sidebar /> */}
		</>
	);
}

export default App;
