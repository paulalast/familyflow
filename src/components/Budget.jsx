import React, { useState } from "react"
import { TextButton } from "./TextButton"
function AddIncomeModal({ isOpen, onClose, addNewIncome }) {
	const [name, setName] = useState("")
	const [amount, setAmount] = useState(0)

	const handleSubmit = e => {
		e.preventDefault()
		addNewIncome({ name, amount: Number(amount) })
		setName("")
		setAmount("")
		onClose()
	}

	return (
		<div
			style={{ display: isOpen ? "block" : "none" }}
			className='flex flex-col justify-start items-start  h-full bg-red-200 w-full rounded-lg p-2'
		>
			<form onSubmit={handleSubmit} className='w-full h-full'>
				<div className='flex gap-10'>
					<div className='w-1/2 flex flex-col justify-center items-center'>
						<label className='w-full' htmlFor='incomeName'>
							Wpływ:
						</label>
						<input
							type='text'
							id='incomeName'
							name='incomeName'
							value={name}
							onChange={e => setName(e.target.value)}
							className='input'
						/>
					</div>
					<div className='w-1/2 flex flex-col justify-center items-center'>
						<label htmlFor='incomeAmount'>Ile:</label>
						<input
							type='number'
							id='incomeAmount'
							name='incomeAmount'
							value={amount}
							onChange={e => setAmount(e.target.value)}
							className='input'
						/>
					</div>
				</div>
				<div className='my-4 flex gap-4 w-full justify-center items-center'>
					<button type='submit' className='button'>
						Dodaj
					</button>
					<button type='button' onClick={onClose} className='button'>
						Zamknij
					</button>
				</div>
			</form>
		</div>
	)
}
function AddExpenseModal({ isOpen, onClose, addNewExpense }) {
	const [name, setName] = useState("")
	const [amount, setAmount] = useState(0)

	const handleSubmit = e => {
		e.preventDefault()
		addNewExpense({ name, amount: Number(amount) })
		setName("")
		setAmount(0)
		onClose()
	}

	return (
		<div
			style={{ display: isOpen ? "block" : "none" }}
			className='flex flex-col justify-start items-start h-full bg-red-200 w-full rounded-lg p-2'
		>
			<form onSubmit={handleSubmit} className='w-full h-full'>
				<div className='flex gap-10'>
					<div className='w-1/2 flex flex-col justify-center items-center'>
						<label className='w-full' htmlFor='expenseName'>
							Wydatek:
						</label>
						<input
							type='text'
							id='expenseName'
							name='expenseName'
							value={name}
							onChange={e => setName(e.target.value)}
							className='input'
						/>
					</div>
					<div className='w-1/2 flex flex-col justify-center items-center'>
						<label htmlFor='expenseAmount'>Ile:</label>
						<input
							type='number'
							id='expenseAmount'
							name='expenseAmount'
							value={amount}
							onChange={e => setAmount(e.target.value)}
							className='input'
						/>
					</div>
				</div>
				<div className='my-4 flex gap-4 w-full justify-center items-center'>
					<button type='submit' className='button'>
						Dodaj
					</button>
					<button type='button' onClick={onClose} className='button'>
						Zamknij
					</button>
				</div>
			</form>
		</div>
	)
}

const Budget = () => {
	const [isIncomeModalOpen, setIsIncomeModalOpen] = useState(false)
	const [isExpenseModalOpen, setIsExpenseModalOpen] = useState(false)
	const [incomes, setIncomes] = useState([])
	const [expenses, setExpenses] = useState([])

	const openIncomeModal = () => setIsIncomeModalOpen(true)
	const closeIncomeModal = () => setIsIncomeModalOpen(false)

	const openExpenseModal = () => setIsExpenseModalOpen(true)
	const closeExpenseModal = () => setIsExpenseModalOpen(false)

	function addNewIncome(income) {
		setIncomes([...incomes, income])
	}
	function addNewExpense(expense) {
		setExpenses([...expenses, expense])
	}

	const totalIncomes = incomes.reduce((acc, curr) => acc + curr.amount, 0)
	const totalExpense = expenses.reduce((acc, curr) => acc + curr.amount, 0)

	return (
		<div className='container h-screen flex flex-col justify-between items-center  -my-10 '>
			<h2 className='flex text-5xl uppercase font-semibold h-1/5 items-end py-1'>
				Budżet
			</h2>
			<div className='flex w-full justify-center gap-4 font-bold uppercase my-1 h-4/5'>
				<div className='relative w-1/2 shadow-lg p-4 rounded-xl bg-emerald-600/70'>
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
								</li>
							)
						})}

						<TextButton onClick={openIncomeModal} buttonText='+' />
						<AddIncomeModal
							isOpen={isIncomeModalOpen}
							onClose={closeIncomeModal}
							addNewIncome={addNewIncome}
						/>
					</ul>
					<p className='absolute bottom-4'>
						Suma wpływów: <span> {totalIncomes} </span>{" "}
					</p>
				</div>
				<div className=' relative w-1/2 shadow-lg border-emerald-800 p-4 rounded-xl bg-red-500/70'>
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
									<p>{expense.name}</p>
									<p>{expense.amount}</p>
								</li>
							)
						})}

						<TextButton onClick={openExpenseModal} buttonText='+' />
						<AddExpenseModal
							isOpen={isExpenseModalOpen}
							onClose={closeExpenseModal}
							addNewExpense={addNewExpense}
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
