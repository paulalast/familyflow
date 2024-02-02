import React from "react"
import Button from "./Button"
import TaskView from "./TaskView"

const Navigation = ({ onBudgetClick, onCalendarClick, onTaskClick }) => {
	return (
		<div className='h-fit fixed top-0 left-0 w-full bg-white/60 text-lg '>
			<div className='container mx-auto flex justify-between items-center'>
				<div className='flex justify-center items-center flex-col py-2'>
					<img src='./src/assets/home.png' alt='homelogo' className='w-10' />
					<span className='text-xl'>FamilyFlow</span>
				</div>
				<div className='flex gap-4'>
					<Button onClick={onBudgetClick}>Budżet</Button>
					<Button onClick={onTaskClick}>Zadania</Button>
					<Button onClick={onCalendarClick}>Kalendarz</Button>
				</div>
			</div>
		</div>
	)
}

export default Navigation
