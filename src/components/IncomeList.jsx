import React from "react"
import Button from "./Button"

const IncomeList = ({ incomes, removeIncome, editIncome, openModal }) => (
	<div className='relative h-1/2 md:h-4/5 min-h-1/2 md:w-1/2 shadow-lg p-4 rounded-xl bg-slate-200/80'>
		<h3 className='uppercase text-xl font-bold bg-slate-100 p-2 rounded-xl'>
			Wpływy
		</h3>
		<ul className='my-4 flex flex-col justify-center items-center gap-2'>
			{incomes.map((income, index) => (
				<li
					key={index}
					className='flex relative w-full justify-between items-start text-left px-2'
				>
					<p className='w-4/6'>{income.name}</p>
					<p className='w-1/6 flex justify-end gap-2 text-right'>
						{income.amount} zł
					</p>
					<div className='flex gap-2 justify-end items-center w-1/6 mb-3'>
						<Button
							variant='iconButton'
							icon={<img src='edit.png' alt='edytuj' className='w-3 h-3' />}
							onClick={() => editIncome(index)}
						/>
						<Button
							variant='iconButton'
							icon={<img src='bin.png' alt='usuń' className='w-3 h-3' />}
							onClick={() => removeIncome(index)}
						/>
					</div>
					<span className='w-full bg-slate-200/60 h-0.5 absolute bottom-0'></span>
				</li>
			))}
			<Button onClick={openModal} variant='openModalButton'>
				+
			</Button>
		</ul>
	</div>
)

export default IncomeList
