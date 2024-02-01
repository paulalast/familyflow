import React from "react"

export const TextButton = ({ onClick, buttonText }) => {
	return (
		<button
			onClick={onClick}
			className='absolute bottom-2 right-2 rounded-full h-10 w-10 justify-center items-center flex  '
		>
			{buttonText}
		</button>
	)
}
