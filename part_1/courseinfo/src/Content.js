export const Content = ({ parts }) => {
	return (
		<>
			{ 
				parts.map(({ name, exercises }, index) =>
					(<p key={ index }>{ name } { exercises }</p>))
			}
		</>
	)
}