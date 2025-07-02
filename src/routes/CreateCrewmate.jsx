import "../styles/create-page.css";

//===================================================================================

import {
	SideBar
} from "../components/SideBar.jsx";

//===================================================================================

import crewmates
	from "../assets/images/home-page/Crewmates.png";

//===================================================================================

import {
	useState
} from "react";

//===================================================================================

import {
	supabase
} from "../client.js";

//===================================================================================

import {
	Form
} from "../components/Form.jsx";

//===================================================================================

import "../styles/create-page.css";

//===================================================================================

function CreateCrewmate() {


	return (

		<>
			<SideBar />

			<main>
				<header>
					<h1>Create a New Crewmate</h1>

					<section className="image-container">

						<img
							src={crewmates}
							alt="Crewmates"
						/>

					</section>

				</header>

				<Form />

			</main>
		</>
	);

} // CreatePage()

//===================================================================================

export { CreateCrewmate };