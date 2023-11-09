import { json } from "react-router";

const getState = ({ getStore, getActions, setStore }) => {
	// people, vehicles, and planet 
	return {
		store: {
			character:[]
		},
		actions: {
			getCharacters: () => {
				fetch("https://swapi.dev/api/people/")
					.then(res => res.json())
					.then(data => setStore({character:data.results}))
					.catch(err => console.error(err))
			}
		}
	};
};

export default getState;
