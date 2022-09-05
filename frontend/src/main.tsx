import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { PetsContextProvider } from "./context/petsContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<PetsContextProvider>
			<App />
		</PetsContextProvider>
	</React.StrictMode>
);
