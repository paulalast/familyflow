import React, { useState } from "react"
import TaskModal from "./Modals/TaskModal"
import Button from "./Button"
import MemberModal from "./Modals/MemberModal"

const TaskView = () => {
	const [isTaskModalOpen, setIsTaskModalOpen] = useState(false)
	const [isMemberModalOpen, setIsMemberModalOpen] = useState(false)
	const [people, setPeople] = useState([])

	const handleOpenTaskModal = () => {
		setIsTaskModalOpen(true)
	}
	const handleCloseTaskModal = () => {
		setIsTaskModalOpen(false)
	}
	const handleOpenMemberModal = () => {
		setIsMemberModalOpen(true)
	}
	const handleCloseMemberModal = () => {
		setIsMemberModalOpen(false)
	}
	const handleSubmitTask = ({ person, task }) => {
		setTasks(prevTasks => {
			const updatedTasks = { ...prevTasks }

			if (updatedTasks[person]) {
				updatedTasks[person] = [...updatedTasks[person], task]
			} else {
				updatedTasks[person] = [task]
			}
			return updatedTasks
		})
		handleCloseTaskModal()
	}
	const handleAddMember = ({ name, color, image }) => {
		if (!people.some(person => person.name === name)) {
			setPeople(prevPeople => [...prevPeople, { name, color, image }])
			setTasks(prevTasks => ({ ...prevTasks, [name]: [] }))
		}
		handleCloseMemberModal()
	}

	const handleRemoveMember = nameToRemove => {
		setPeople(people => people.filter(person => person.name !== nameToRemove))
		setTasks(tasks => {
			const { [nameToRemove]: _, ...remainingTasks } = tasks
			return remainingTasks
		})
	}
	const [tasks, setTasks] = useState({})
	const [isEditing, setIsEditing] = useState(false)
	const [memberToEdit, setMemberToEdit] = useState(null)

	const handleEditClick = memberData => {
		setMemberToEdit(memberData)
		setIsEditing(true)
		setIsMemberModalOpen(true)
	}
	const handleEditMember = ({ name, color, image }) => {
		const index = people.findIndex(person => person.name === memberToEdit.name)
		const updatedPeople = [...people]
		if (index !== -1) {
			updatedPeople[index] = { name, color, image }
			setPeople(updatedPeople)

			if (memberToEdit.name !== name) {
				setTasks(prevTasks => {
					const tasksCopy = { ...prevTasks }
					tasksCopy[name] = tasksCopy[memberToEdit.name]
					delete tasksCopy[memberToEdit.name]
					return tasksCopy
				})
			}
		}
		setIsEditing(false)
		handleCloseMemberModal()
	}
	return (
		<div className='container h-screen flex flex-col justify-start items-center  -my-10'>
			<h2 className='flex text-5xl uppercase font-semibold h-1/5 items-end py-1'>
				Tygodniowe Zadania
			</h2>
			<TaskModal
				isOpen={isTaskModalOpen}
				onClose={handleCloseTaskModal}
				onSubmit={handleSubmitTask}
				people={people}
			/>
			<MemberModal
				isOpen={isMemberModalOpen}
				onClose={handleCloseMemberModal}
				onSubmit={isEditing ? handleEditMember : handleAddMember}
				onEdit={handleEditMember}
				isEditing={isEditing}
				memberData={memberToEdit}
			/>
			<div className='flex flex-wrap md:flex-nowrap gap-5 w-full justify-center items-start my-10'>
				{Object.entries(tasks).map(([personName, personTasks]) => {
					const person = people.find(people => people.name === personName)
					return (
						<TaskList
							key={personName}
							personName={personName}
							tasks={personTasks}
							color={person?.color}
							image={person?.image}
							onRemove={() => handleRemoveMember(personName)}
							onEdit={() => handleEditClick({ name: personName, ...person })}
							className='flex flex-row'
						/>
					)
				})}
			</div>
			<div className='flex gap-4 '>
				<Button
					onClick={handleOpenTaskModal}
					className='bg-slate-200 shadow-md hover:bg-slate-300 transition-colors'
				>
					Dodaj zadanie
				</Button>
				<Button
					onClick={handleOpenMemberModal}
					className='bg-slate-200 shadow-md hover:bg-slate-300 transition-colors'
				>
					Dodaj osobę
				</Button>
			</div>
		</div>
	)
}

const TaskList = ({ tasks, personName, color, image, onRemove, onEdit }) => {
	return (
		<div
			className='flex  flex-col gap-2 min-w-1/4 w-4/5 bg-slate-300/40 rounded-md p-2'
			style={{ backgroundColor: color }}
		>
			<div className='flex justify-center items-center gap-2 text-xl bg-white/70 p-2 rounded-md w-full '>
				<img src={image} alt='alt' className='w-5' />
				<p className='w-full text-center'>{personName}</p>
				<Button
					buttonType='button'
					variant='iconButton'
					onClick={() => onEdit()}
				>
					<img src='edit.png' alt='edytuj członka' />
				</Button>
				<Button
					buttonType='button'
					variant='iconButton'
					onClick={() => onRemove()}
				>
					<img src='bin.png' alt='usuń członka' />
				</Button>
			</div>
			<ul className='w-full text-left p-2 flex flex-col gap-3'>
				{tasks.map((task, index) => (
					<li key={index}>
						{typeof task === "string" ? task : task.join(", ")}
					</li>
				))}
			</ul>
		</div>
	)
}
export default TaskView
