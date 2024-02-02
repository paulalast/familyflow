import React, { useEffect, useState } from "react"
import Button from "./Button"

function FormModal({ isOpen, onClose, onSubmit, labels, initialValues }) {
	const [name, setName] = useState(initialValues.name)
	const [amount, setAmount] = useState(0)

	useEffect(() => {
		setName(initialValues.name)
		setAmount(initialValues.amount)
	}, [initialValues])

	const handleSubmit = e => {
		e.preventDefault()
		onSubmit({ name, amount: Number(amount) })
		onClose()
	}

	return (
		<div
			style={{ display: isOpen ? "block" : "none" }}
			className='flex flex-col justify-start items-start h-full bg-slate-300 w-full rounded-lg p-2'
		>
			<form onSubmit={handleSubmit} className='w-full h-full'>
				<div className='flex gap-10'>
					<div className='w-1/2 flex flex-col justify-center items-center'>
						<label className='w-full' htmlFor={`form-name-${labels.name}`}>
							{labels.nameLabel}
						</label>
						<input
							type='text'
							id={`form-name-${labels.name}`}
							name={`form-name-${labels.name}`}
							value={name}
							onChange={e => setName(e.target.value)}
							className='input'
							required
							aria-describedby={`form-name-error-${labels.name}`}
						/>
					</div>
					<div className='w-1/2 flex flex-col justify-center items-center'>
						<label htmlFor={`form-amount-${labels.name}`}>
							{labels.amountLabel}
						</label>
						<input
							type='number'
							id={`form-amount-${labels.name}`}
							name={`form-amount-${labels.name}`}
							value={amount}
							onChange={e => setAmount(e.target.value)}
							className='input'
							step='0.01'
							min='1'
							required
							aria-describedby={`form-name-error-${labels.name}`}
						/>
					</div>
				</div>
				<div className='my-4 flex gap-4 w-full justify-center items-center'>
					<Button variant='textButton' buttonType='submit'>
						Dodaj
					</Button>
					<Button variant='textButton' buttonType='button' onClick={onClose}>
						Zamknij
					</Button>
				</div>
			</form>
		</div>
	)
}
export default FormModal
