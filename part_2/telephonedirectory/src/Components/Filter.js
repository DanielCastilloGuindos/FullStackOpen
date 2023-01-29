export const Filter = ({ filter, handleChangeFilter }) => {
	return (
		<p>Filter shown with <input value={filter} onChange={handleChangeFilter} /></p>
	);
}