import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Signin from "./components/signin-form/Signin";
import Signup from "./components/signup-form/Signup";
import Dashboard from "./components/users/Dashboard";
import { SWRConfig } from "swr";
import fetcher from "./lib/axiosInstance";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<SWRConfig value={{ fetcher: (url) => fetcher(url).then((res) => res.data) }}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<App />} />
					<Route path="/signin" element={<Signin />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/dashboard" element={<Dashboard />} />
				</Routes>
			</BrowserRouter>
		</SWRConfig>
	</React.StrictMode>
);
