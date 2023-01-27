import { Statistic } from "./Statistic";

export const Statistics = ({ stats }) => {
	if ( !stats.all ) return (<p>No feedback given</p>)
	
	const statsEntries = Object.entries(stats);

	return (
		<section>
			<h3>Statistics</h3>
			<table>
				<tbody>
					{
						statsEntries.map(([text, value], index) => 
							<Statistic
								key={index}
								text={text}
								value={value} />)
					}
				</tbody>
			</table>
		</section>
	);
} 