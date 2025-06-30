import { SideBar } from "../components/SideBar.jsx";

//=================================================================

import "../styles/gallery-page.css";

//=================================================================


//=================================================================

function CrewmateGallery() {

	return (

		<>

			<SideBar />

			<main>
				<header>
					<h1>Your Crewmate Gallery!</h1>

					<h3>You haven't made a crewmate yet!</h3>
				</header>

				<div className="btn-container">
					<button
						type="button"
					>
						Create one here!
					</button>
				</div>
			</main>

		</>

	);

} // CrewmateGallery()

//=================================================================

export { CrewmateGallery };