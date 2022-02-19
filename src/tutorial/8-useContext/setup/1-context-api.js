import React, { useState, useContext } from 'react';
import { data } from '../../../data';

const PersonContext = React.createContext(); // creates two components - 1. Provider, 2. Consumer

const ContextAPI = () => {
	const [people, setPeople] = useState(data);
	const removePerson = (id) => {
		setPeople((people) => {
			return people.filter((person) => person.id !== id);
		});
	};
	return (
		<PersonContext.Provider value={{ people, removePerson }}>
			<h3>prop drilling</h3>
			<List />
		</PersonContext.Provider>
	);
};

const List = () => {
	const data = useContext(PersonContext);

	return (
		<>
			{data.people.map((person) => {
				return <SinglePerson key={person.id} {...person} />;
			})}
		</>
	);
};

const SinglePerson = ({ id, name }) => {
	const { removePerson } = useContext(PersonContext);

	return (
		<div className='item'>
			<h4>{name}</h4>
			<button onClick={() => removePerson(id)}>remove</button>
		</div>
	);
};

export default ContextAPI;
