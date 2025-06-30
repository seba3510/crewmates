import "./styles/home-page.css";

//===================================================================================

import { SideBar } from "./components/SideBar";

//===================================================================================

import crewmatesImage from "./assets/images/home-page/Crewmates.png";

//===================================================================================

import spaceship from "./assets/images/home-page/Spaceship.webp"

//===================================================================================


function App() {

	const crewmates = [];

	//===================================================================================

	return (

		<>

			<SideBar />

			<main>

				<header>
					<h1>Welcome to the Crewmate Creator!</h1>

					<p>
						Here is where you create your own set of crewmates before sending them off into space!
					</p>

					<div className="image-container">
						<img
							src={crewmatesImage}
							alt="Crewmates"
						/>
					</div>

					<div className="image-container">
						<img
							src={spaceship}
							alt="This is a spaceship."
						/>
					</div>
				</header>
			</main>

		</>


	);

} // App()

//===================================================================================

export { App };
