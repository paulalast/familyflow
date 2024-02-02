import React from "react"

const buttonVariants = {
	openModalButton:
		"absolute bottom-2 right-2 rounded-full h-10 w-10 justify-center items-center flex shadow-2xl bg-slate-200",
	textButton: "border-2 w-1/4  ",
	iconButton: "flex justify-center items-center w-5 h-5 relative p-0.5",
}

const Button = ({
	onClick,
	buttonType = "button",
	children,
	className,
	icon,
	variant = "text",
}) => {
	const classes = `${buttonVariants[variant]} ${className || ""}`
	return (
		<button onClick={onClick} type={buttonType} className={classes}>
			{icon && <span>{icon}</span>}
			{children}
		</button>
	)
}

export default Button
