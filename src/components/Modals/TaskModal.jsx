import React, { useEffect, useState } from "react"
import Button from "../Button"

const TaskModal = ({ isOpen, onClose, onSubmit, people }) => {
	const [selectedPerson, setSelectedPerson] = useState("")
	const [task, setTask] = useState("")

	useEffect(() => {
		if (people.length > 0) {
			setSelectedPerson(people[0].name)
		}
	}, [people])

	const handleSubmit = e => {
		e.preventDefault()
		onSubmit({ person: selectedPerson, task })
		onClose()
	}
	return (
		<div
			style={{ display: isOpen ? "block" : "none" }}
			className='absolute mt-40 flex flex-col justify-center items-center h-1/2 w-1/2 bg-slate-300  rounded-lg p-2'
		>
			<form
				onSubmit={handleSubmit}
				className='flex flex-col justify-center items-center h-full'
			>
				<div className=''>
					<h3>Dodaj zadanie</h3>
				</div>
				<div className='h-2/3 flex flex-col gap-2 w-4/5 justify-center items-start'>
					<label htmlFor='person-select'></label>
					<select
						id='person-select'
						value={selectedPerson}
						onChange={e => setSelectedPerson(e.target.value)}
						required
						className='w-full p-1.5 rounded-md'
					>
						{people.map((person, index) => (
							<option key={person.name} value={person.name}>
								{person.name}
							</option>
						))}
					</select>
					<label htmlFor='task-input'></label>
					<input
						type='text'
						name=''
						id='task-input'
						value={task}
						onChange={e => setTask(e.target.value)}
						required
						placeholder='Zadanie:'
						className='w-full'
					/>
					{/* <input type='date' name='' id='' className='w-full' /> */}
				</div>

				<div className='flex gap-4'>
					<Button variant='textButton' buttonType='submit'>
						Dodaj
					</Button>
					<Button variant='textButton' onClick={onClose}>
						Zamknij
					</Button>
				</div>
			</form>
		</div>
	)
}

export default TaskModal
