import React, { useState } from "react"
import Navigation from "./Navigation"
import Budget from "./Budget"
import TaskView from "./TaskView"
import CalendarView from "./CalendarView"

const GuestTry = () => {
	const [currentView, setCurrentView] = useState("Budget")
	const handleBudgetView = () => {
		setCurrentView("Budget")
	}

	const handleTaskView = () => {
		setCurrentView("Tasks")
	}

	const handleCalendarView = () => {
		setCurrentView("Calendar")
	}
	const [budgetData, setBudgetData] = useState({
		incomes: [],
		expenses: [],
	})

	const addNewIncome = income => {
		setBudgetData(prevData => ({
			...prevData,
			incomes: [...prevData.incomes, income],
		}))
	}

	const addNewExpense = expense => {
		setBudgetData(prevData => ({
			...prevData,
			expenses: [...prevData.expenses, expense],
		}))
	}

	const removeIncome = index => {
		setBudgetData(prevData => ({
			...prevData,
			incomes: prevData.incomes.filter((_, i) => i !== index),
		}))
	}
	const editIncome = (index, newIncome) => {
		setBudgetData(prevData => ({
			...prevData,
			incomes: prevData.incomes.map((income, i) =>
				i === index ? newIncome : income
			),
		}))
	}

	const removeExpense = index => {
		setBudgetData(prevData => ({
			...prevData,
			expenses: prevData.expenses.filter((_, i) => i !== index),
		}))
	}
	const editExpense = (index, newExpense) => {
		setBudgetData(prevData => ({
			...prevData,
			expenses: prevData.expenses.map((expense, i) =>
				i === index ? newExpense : expense
			),
		}))
	}

	let contentView = null

	if (currentView === "Budget") {
		contentView = (
			<Budget
				incomes={budgetData.incomes}
				expenses={budgetData.expenses}
				addNewIncome={addNewIncome}
				addNewExpense={addNewExpense}
				removeIncome={removeIncome}
				editIncome={editIncome}
				removeExpense={removeExpense}
				editExpense={editExpense}
			/>
		)
	} else if (currentView === "Tasks") {
		contentView = <TaskView />
	} else if (currentView === "Calendar") {
		contentView = <CalendarView />
	}

	return (
		<div className='container w-full '>
			<Navigation
				onBudgetClick={handleBudgetView}
				onTaskClick={handleTaskView}
				onCalendarClick={handleCalendarView}
			/>
			{contentView}
		</div>
	)
}

export default GuestTry
