import "./App.css";
import NavigationBar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import Sidebar from "./components/Users/Sidebar";
import Login from "./components/Users/Login";
import Signup from "./components/Users/Signup";

function App() {
	return (
		<>
			<NavigationBar />
			<Hero />
			<Testimonials />
			<Footer />
			{/* <Sidebar /> */}
			{/* <Login /> */}
			{/* <Signup /> */}
		</>
	);
}

export default App;
