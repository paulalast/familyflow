import React, { useState, useEffect } from "react"
import Button from "../Button"

const images = ["bin.png", "unicorn.png", "billiard-ball.png", "lego.png"]

const MemberModal = ({
	isOpen,
	onClose,
	onSubmit,
	memberData,
	onEdit,
	isEditing,
}) => {
	const [memberName, setMemberName] = useState(
		memberData ? memberData.name : ""
	)
	const [selectedColor, setSelectedColor] = useState(
		memberData ? memberData.color : "#FFFFFF"
	)
	const [selectedImage, setSelectedImage] = useState(
		memberData ? memberData.image : images[0]
	)
	useEffect(() => {
		if (isEditing && memberData) {
			setMemberName(memberData.name)
			setSelectedColor(memberData.color)
			setSelectedImage(memberData.image)
		} else {
			setMemberName("")
			setSelectedColor("#FFFFFF")
			setSelectedImage(images[0])
		}
	}, [memberData, isEditing])
	const handleSubmit = e => {
		e.preventDefault()
		const member = {
			name: memberName,
			color: selectedColor,
			image: selectedImage,
		}

		if (isEditing) {
			onEdit(member)
		} else {
			onSubmit(member)
		}
		setMemberName("")
		setSelectedColor("#FFFFFF")
		setSelectedImage(images[0])
		onClose()
	}
	return (
		<div
			style={{ display: isOpen ? "block" : "none" }}
			className='absolute mt-40 flex flex-col justify-center items-center h-fit w-fit bg-slate-300  rounded-lg px-10 py-8 z-50'
		>
			<form
				onSubmit={handleSubmit}
				className='w-full h-full justify-center items-center flex flex-col'
			>
				<div className='flex gap-10 justify-center items-center'>
					<div className='w-full flex flex-col justify-center items-center'>
						<input
							type='text'
							value={memberName}
							onChange={e => setMemberName(e.target.value)}
							placeholder='Imię:'
							required
							className='mb-4 p-2 rounded-md w-full'
						/>
						<input
							type='color'
							value={selectedColor}
							onChange={e => setSelectedColor(e.target.value)}
							className='mb-4 h-10 rounded-md w-full '
							placeholder="color"
						/>
						<select
							value={selectedImage}
							onChange={e => setSelectedImage(e.target.value)}
							className='mb-4 p-2 rounded-md w-full'
						>
							{images.map((image, index) => (
								<option key={index} value={image}>
									{image}
								</option>
							))}
						</select>
					</div>
				</div>
				<div className='my-4 flex gap-4 w-full justify-center items-center'>
					<Button variant='textButton' buttonType='submit'>
						{isEditing ? "Edytuj" : "Dodaj"}
					</Button>
					<Button variant='textButton' buttonType='button' onClick={onClose}>
						Zamknij
					</Button>
				</div>
			</form>
		</div>
	)
}

export default MemberModal
