import React, { useState } from "react"
import Button from "./Button"
import FormModal from "./FormModal"

const Budget = ({
	incomes,
	expenses,
	addNewIncome,
	addNewExpense,
	removeExpense,
	editExpense,
	removeIncome,
	editIncome,
}) => {
	const [isIncomeModalOpen, setIsIncomeModalOpen] = useState(false)
	const [isExpenseModalOpen, setIsExpenseModalOpen] = useState(false)

	const openIncomeModal = () => setIsIncomeModalOpen(true)
	const closeIncomeModal = () => setIsIncomeModalOpen(false)

	const openExpenseModal = () => setIsExpenseModalOpen(true)
	const closeExpenseModal = () => setIsExpenseModalOpen(false)

	const totalIncomes = incomes.reduce((acc, curr) => acc + curr.amount, 0)
	const totalExpense = expenses.reduce((acc, curr) => acc + curr.amount, 0)

	return (
		<div className='container h-screen flex flex-col justify-between items-center  -my-10 '>
			<h2 className='flex text-5xl uppercase font-semibold h-1/5 items-end py-1'>
				Budżet
			</h2>
			<div className='flex flex-col md:flex-row w-full justify-center gap-4 font-bold uppercase my-1 h-4/5'>
				<div className='relative h-1/2 md:h-4/5 min-h-1/2 md:w-1/2 shadow-lg p-4 rounded-xl bg-slate-200/80'>
					<h3 className='uppercase text-xl font-bold bg-slate-100 p-2 rounded-xl'>
						Wpływy
					</h3>
					<ul className='my-4 flex flex-col justify-center items-center gap-2'>
						{incomes.map((income, index) => {
							return (
								<li
									key={index}
									className='flex w-full justify-between items-center'
								>
									<p>{income.name}</p>
									<p>{income.amount}</p>
									<div className='flex gap-2 justify-center items-center '>
										<Button
											variant='iconButton'
											icon={
												<img
													src='edit.png'
													alt='edytuj'
													className='w-3 h-3 absolute bottom-1'
												/>
											}
											onClick={() => editIncome(index)}
										></Button>
										<Button
											variant='iconButton'
											icon={
												<img
													src='bin.png'
													alt='usuń'
													className='absolute w-3 h-3 bottom-1 '
												/>
											}
											onClick={() => removeIncome(index)}
										></Button>
									</div>
								</li>
							)
						})}

						<Button onClick={openIncomeModal} variant='openModalButton'>
							+
						</Button>
						<FormModal
							isOpen={isIncomeModalOpen}
							onClose={closeIncomeModal}
							onSubmit={addNewIncome}
							labels={{
								nameLabel: "Nazwa wpływu",
								amountLabel: "Kwota wpływu",
								title: "Dodaj Wpływ",
							}}
							initialValues={{ name: "", amount: 0 }}
						/>
					</ul>
					<p className='absolute bottom-4'>
						Suma wpływów: <span> {totalIncomes} </span>{" "}
					</p>
				</div>
				<div className=' relative h-1/2 md:h-4/5 min-h-1/2 md:w-1/2 shadow-lg  p-4 rounded-xl bg-slate-200/80'>
					<h3 className='uppercase text-xl font-bold bg-slate-100 p-2 rounded-xl'>
						Wydatki
					</h3>
					<ul className='my-4 flex flex-col justify-center items-center gap-2'>
						{expenses.map((expense, index) => {
							return (
								<li
									key={index}
									className='flex w-full justify-between items-center'
								>
									<div className='flex justify-between w-4/5'>
										<p>{expense.name}</p>
										<p>{expense.amount}</p>
									</div>
									<div className='flex gap-2 justify-center items-center '>
										<Button
											variant='iconButton'
											icon={
												<img
													src='edit.png'
													alt='edytuj'
													className='w-3 h-3 absolute bottom-1'
												/>
											}
											onClick={() => editExpense(index)}
										></Button>
										<Button
											variant='iconButton'
											icon={
												<img
													src='bin.png'
													alt='usuń'
													className='absolute w-3 h-3 bottom-1 '
												/>
											}
											onClick={() => removeExpense(index)}
										></Button>
									</div>
								</li>
							)
						})}
						<Button onClick={openExpenseModal} variant='openModalButton'>
							+
						</Button>
						<FormModal
							isOpen={isExpenseModalOpen}
							onClose={closeExpenseModal}
							onSubmit={addNewExpense}
							labels={{
								nameLabel: "Nazwa wydatku",
								amountLabel: "Kwota wydatku",
								title: "Dodaj Wydatek",
							}}
							initialValues={{ name: "", amount: 0 }}
						/>
					</ul>
					<p className='absolute bottom-4'>
						Suma wydatków: <span> {totalExpense} </span>
					</p>
				</div>
			</div>

			<div className='my-1 text-xl uppercase'>
				Saldo: <span className='font-bold'> {totalIncomes - totalExpense}</span>
			</div>
		</div>
	)
}

export default Budget
