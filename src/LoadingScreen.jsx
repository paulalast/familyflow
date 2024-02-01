import React from "react"
import { easeInOut, motion } from "framer-motion"

const LoadingScreen = () => {
	return (
		<div className='container mx-auto  w-full h-full flex flex-col justify-center items-center gap-4 -top-0'>
			<motion.img
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.2, duration: 2, ease: easeInOut }}
				src='./src/assets/home.png'
				alt='homelogo'
				className='w-48'
			/>
			<motion.div>
				<motion.h1
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.3, duration: 2, ease: easeInOut }}
					className='text-9xl font-headerFont font-bold'
				>
					FamilyFlow
				</motion.h1>
				<motion.h2
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.4, duration: 2, ease: easeInOut }}
					className='text-4xl font-mainFont  mt-6'
				>
					Twój Asystent Domowy
				</motion.h2>
			</motion.div>
		</div>
	)
}

export default LoadingScreen
