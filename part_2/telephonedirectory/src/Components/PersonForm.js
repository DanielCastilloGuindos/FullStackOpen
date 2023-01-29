import { useState } from "react"

const INIT_VALUES = {
  NEW_NAME: '',
  NEW_PHONE: '',
};

export const PersonForm = ({ handleSubmitForm }) => {
  const [ newName, setNewName ] = useState(INIT_VALUES.NEW_NAME);
  const [ newPhone, setNewPhone ] = useState(INIT_VALUES.NEW_PHONE);

  const handleChangeName = (event) => {
    const { value } = event.target;
    setNewName(value);
  }

  const handleChangePhone = (event) => {
    const { value } = event.target;
    setNewPhone(value);
  }

	const cleanForm = () => {
		setNewName(INIT_VALUES.NEW_NAME);
		setNewPhone(INIT_VALUES.NEW_PHONE);
	}

	const getNewPersons = () => {
		return {
			name: newName,
			phone: newPhone,
		}
	}

	return (
		<form onSubmit={handleSubmitForm(getNewPersons(), cleanForm)}>
			<p>
				name: <input value={newName} onChange={handleChangeName} />
			</p>
			<p>
				Number: <input value={newPhone} onChange={handleChangePhone} />
			</p>
			<div>
				<button type="submit">add</button>
			</div>
		</form>
	)
}