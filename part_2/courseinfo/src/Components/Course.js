import { Content } from "./Content";
import { Header } from "./Header"
import { Total } from "./Total";

const INIT_VALUE_ACUMULATOR = 0;

export const Course = ({ course }) => {
	const { id, name, parts } = course;

	const getTotalExercises = () => {
		const total = parts.reduce((acumulator, part) => {
			return acumulator + part.exercises;
		}, INIT_VALUE_ACUMULATOR);
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