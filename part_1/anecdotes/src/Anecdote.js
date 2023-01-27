export const Anecdote = ({ text, votes }) => {
	return (
		<>
			<p>{ text }</p>
			<p>has {votes || 0} votes</p>
		</>
	);
}