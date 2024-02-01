import { useEffect, useState } from "react"
import "./App.css"
import LoadingScreen from "./LoadingScreen"
import HomeScreen from "./components/HomeScreen"
import { motion } from "framer-motion"

function App() {
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false)
		}, 2500)

		return () => {
			clearTimeout(timer)
		}
	}, [])

	return (
		<main className='container w-full ' >
			{isLoading ? <LoadingScreen /> : <HomeScreen />}
		</main>
	)
}

export default App
