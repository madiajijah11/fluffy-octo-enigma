import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { PetsContextProvider } from "./context/petsContext";
import { AuthContextProvider } from "./context/authContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<AuthContextProvider>
			<PetsContextProvider>
				<App />
			</PetsContextProvider>
		</AuthContextProvider>
	</React.StrictMode>
);
