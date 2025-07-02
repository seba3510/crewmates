import { SideBar } from "../components/SideBar.jsx";

//==============================================================

import crewmates from "../assets/images/home-page/Crewmates.png";

//==============================================================

import {
	useState
} from "react";

//==============================================================

import {
	useParams
} from "react-router-dom";

//==============================================================

import { supabase } from "../client.js";

//==============================================================

function EditCrewmate(
	{
		name,
		speed,
		color
	}) {

	const {
		id
	} =
		useParams();

	//==============================================================

	const [
		crewmate,
		setCrewmate
	] =
		useState({
			id: null,
			name: "",
			speed: "",
			color: ""
		});

	//==============================================================

	function handleInputChange(event) {

		const {
			name,
			value
		} = event.target;

		setCrewmate((prev) => {
			return {
				...prev,
				[name]: value
			}
		});


	} // handleInputChange()

	//==============================================================

	return (
		<>
			<SideBar />

			<main>

				<header>
					<h1>Edit Your Crewmate</h1>


					<section className="image-container">

						<img src={crewmates} alt="Crewmates" />
					</section>

					<section id="info-container">
						<h3>Current Crewmate Info:</h3>

						<p>
							<strong>
								Name:
							</strong>

							<span>
								{name}
							</span>
						</p>

						<p>
							<strong>
								Speed:
							</strong>

							<span>
								{speed}
							</span>

						</p>

						<p>
							<strong>
								Color:
							</strong>
						</p>
					</section>

				</header>

			</main>

		</>
	);
} // EditCrewmate()

//==============================================================

export { EditCrewmate };
