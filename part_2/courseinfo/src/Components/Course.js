import { Content } from "./Content";
import { Header } from "./Header"
import { Total } from "./Total";

export const Course = ({ course }) => {
	const { id, name, parts } = course;

	const getTotalExercises = () => {
		let total = 0;
		parts.map(part => total += part.exercises);
		return total;
	};

	return (
		<>
			<Header title={name} />
			<Content parts={parts} />
			<Total value={ getTotalExercises() } />
		</>
	)
}