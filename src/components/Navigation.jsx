import React from "react"

const Navigation = () => {
	return (
		<div className='h-fit fixed top-0 left-0 w-full bg-white/60 text-lg '>
			<div className='container mx-auto flex justify-between items-center'>
				<div className='flex justify-center items-center flex-col py-2'>
					<img src='./src/assets/home.png' alt='homelogo' className='w-10' />
					<span className='text-xl'>FamilyFlow</span>
				</div>
				<div className='flex gap-4'>
					{/* <button onClick={handleBudgetView}>Budżet</button>
					<button onClick={handleTaskView}>Zadania</button>
					<button onClick={handleCalendarView}>Kalendarz</button> */}
				</div>
			</div>
		</div>
	)
}

export default Navigation
