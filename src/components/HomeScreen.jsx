import React, { useState } from "react"
import Navigation from "./Navigation"
import CreateNewUser from "./CreateNewUser"
import GuestTry from "./GuestTry"

const HomeScreen = () => {
	const [guestTry, setGuestTry] = useState(false)
	if (guestTry) {
		return <GuestTry />
	}
	return (
		<div className='flex flex-col gap-4 text-2xl justify-center items-center w-full'>
			{/* <Navigation /> */}
			<img src='./src/assets/home.png' alt='homelogo' className='w-32' />
			<div className='flex gap-4 flex-col'>
				<button onClick={() => setGuestTry(true)}>Wersja Testowa</button>

				{/* <button>Zarejestruj się</button>
				<button>Zaloguj się</button> */}
			</div>
			{/* <CreateNewUser />
			<GuestTry /> */}
		</div>
	)
}

export default HomeScreen
