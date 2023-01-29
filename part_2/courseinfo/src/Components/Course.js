import { Content } from "./Content";
import { Header } from "./Header"

export const Course = ({ course }) => {
	const { id, name, parts } = course;

	return (
		<>
			<Header title={name} />
			<Content parts={parts} />
		</>
	)
}