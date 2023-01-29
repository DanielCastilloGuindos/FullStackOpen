export const PersonList = ({ persons, filter}) => {
  const personsToShown = persons.filter(({ name, phone }) => 
    name.includes(filter) || phone.includes(filter)
  );

	return (
		<>
			{
				personsToShown.map((person) => <p key={person.name}>{person.name} - {person.phone}</p>)
			}
		</>
	)
}