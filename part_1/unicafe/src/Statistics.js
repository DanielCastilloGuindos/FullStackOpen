export const Statistics = ({ stats }) => {
	if ( !stats.all ) return (<p>No feedback given</p>)
	
	const statsEntries = Object.entries(stats);

	return (
		<section>
			<h3>Statistics</h3>

			{
				statsEntries.map(([statisticName, value], index) => 
					<p key={index}>{statisticName}: {value}</p>)
			}
		</section>
	);
} 