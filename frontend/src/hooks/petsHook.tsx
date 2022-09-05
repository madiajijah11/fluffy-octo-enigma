import { useReducer } from "react";

export const usePetsReducer = () => {
	const [petData, setPetData]: any = useReducer(
		(state: any[], action: { type: any; payload: { id: any } }) => {
			switch (action.type) {
				case "ADD_PET":
					return [...state, action.payload];
				case "DELETE_PET":
					return state.filter((pet: any) => pet.id !== action.payload);
				case "UPDATE_PET":
					return state.map((pet: any) =>
						pet.id === action.payload.id ? action.payload : pet
					);
				default:
					return state;
			}
		},
		[]
	);

	return [petData, setPetData];
};
