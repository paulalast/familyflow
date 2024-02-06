import React, { useState } from "react"
import Button from "./Button"
import FormModal from "./Modals/FormModal"
import ExpenseList from "./ExpenseList"
import IncomeList from "./IncomeList"

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

	const openIncomeModal = () => {
		setIsIncomeModalOpen(true)
		setEditModalType("income")
	}

	const openExpenseModal = () => {
		setIsExpenseModalOpen(true)
		setEditModalType("expense")
	}

	const closeModal = () => {
		setIsIncomeModalOpen(false)
		setIsExpenseModalOpen(false)
		setEditingItem(null)
		setIsEditing(false)
		setEditModalType("")
	}
	const handleModalSubmit = data => {
		if (isEditing) {
			if (editModalType === "income") {
				editIncome(editingItem.index, data)
			} else {
				editExpense(editingItem.index, data)
			}
		} else {
			if (editModalType === "income") {
				addNewIncome(data)
			} else {
				addNewExpense(data)
			}
		}
		closeModal()
	}

	const [editingItem, setEditingItem] = useState(null)
	const [isEditing, setIsEditing] = useState(false)
	const [editModalType, setEditModalType] = useState("income")

	
	const totalIncomes = incomes.reduce(
		(acc, curr) => acc + (curr?.amount || 0),
		0
	)
	const totalExpense = expenses.reduce(
		(acc, curr) => acc + (curr?.amount || 0),
		0
	)


	return (
		<div className='container h-screen flex flex-col justify-between items-center -my-10'>
			<h2 className='flex text-5xl uppercase font-semibold h-1/5 items-end py-1'>
				Budżet
			</h2>
			<div className='flex flex-col md:flex-row w-full justify-center gap-4 font-bold uppercase my-1 h-4/5'>
				<IncomeList
					incomes={incomes}
					removeIncome={removeIncome}
					editIncome={index => {
						const itemToEdit = incomes[index]
						setEditingItem({ ...itemToEdit, index })
						setIsEditing(true)
						openIncomeModal()
					}}
					openModal={openIncomeModal}
				/>
				<ExpenseList
					expenses={expenses}
					removeExpense={removeExpense}
					editExpense={index => {
						const itemToEdit = expenses[index]
						setEditingItem({ ...itemToEdit, index })
						setIsEditing(true)
						openExpenseModal()
					}}
					openModal={openExpenseModal}
				/>
			</div>
			<FormModal
				isOpen={isIncomeModalOpen || isExpenseModalOpen}
				onClose={() => {
					closeModal()
				}}
				onSubmit={handleModalSubmit}
				initialValues={
					editingItem
						? { name: editingItem.name, amount: editingItem.amount }
						: { name: "", amount: 0 }
				}
				labels={{
					nameLabel: editModalType === "income" ? "Nazwa" : "Nazwa wydatku",
					amountLabel: "Kwota",
					title: isEditing ? "Edytuj" : "Dodaj",
				}}
			/>
			<div className='my-1 text-xl uppercase'>
				Saldo: <span className='font-bold'>{totalIncomes - totalExpense}</span>
			</div>
		</div>
	)
}

export default Budget
