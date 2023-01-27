import { Part } from "./Part"

export const Content = ({ parts }) => {
	let [first, second, third] = parts;

	return (
		<div>
			<Part name={ first.name } exercises={ first.exercises }/>
			<Part name={ second.name } exercises={ second.exercises }/>
			<Part name={ third.name } exercises={ third.exercises }/>
		</div>
	)
}