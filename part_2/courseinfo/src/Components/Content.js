import { Part } from "./Part"

export const Content = ({ parts }) => {
	return (
		<>
			{
				parts.map(({ id, name, exercises }) => 
					(<Part
						key={id}
						id={id}
						name={name}
						exercises={exercises} />)
				)
			}
		</>
	)
}