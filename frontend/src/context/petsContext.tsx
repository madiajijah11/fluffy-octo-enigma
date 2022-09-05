import { createContext, useReducer } from "react";
import { usePetsReducer } from "../hooks/petsHook";

export const PetsContext = createContext(null);

export const PetsContextProvider = ({ children }: any) => {
	const [state, dispatch] = useReducer(usePetsReducer, {
		pets: null,
	});

	return <PetsContext.Provider value={}>{children}</PetsContext.Provider>;
};
