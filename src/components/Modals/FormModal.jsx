import React, { useEffect, useState } from "react"
import Button from "../Button"

function FormModal({ isOpen, onClose, onSubmit, labels, initialValues }) {
	const [name, setName] = useState(initialValues.name)
	const [amount, setAmount] = useState(initialValues.amount)

	useEffect(() => {
		setName(initialValues?.name)
		setAmount(initialValues?.amount)
	}, [initialValues])

	const handleSubmit = e => {
		e.preventDefault()
		if (onSubmit) {
			onSubmit({ name, amount: Number(amount) })
		}
		onClose()
	}
	
	return (
		<div
			style={{ display: isOpen ? "block" : "none" }}
			className='fixed inset-0 flex justify-center items-center  flex-col h-fit  w-3/4 lg:w-1/3 mx-auto bg-slate-300 top-44 rounded-lg px-2 py-8 shadow-xl'
		>
			<form onSubmit={handleSubmit} className='w-full h-full'>
				<div className='flex gap-6'>
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
