import { SideBar } from "../components/SideBar.jsx";

//==============================================================

import crewmates from "../assets/images/home-page/Crewmates.png";

//==============================================================

import {
	useState,
	useEffect
} from "react";

//==============================================================

import {
	useParams
} from "react-router-dom";

//==============================================================

import { supabase } from "../client.js";

//==============================================================

function EditCrewmate() {

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

	async function fetchCrewmate() {

		try {

			const {
				data,
				error
			} =
				await supabase
					.from("Crewmates")
					.select()
					.eq("id", id)
					.single();

			if (error) {

				throw error;

			} // if

			else {

				console.log(data);

				setCrewmate(data);

			} // else

		} // try

		catch (error) {

			alert(error);

		} // catch

	} // fetchCrewmate()

	//==============================================================

	useEffect(() => {

		fetchCrewmate();

	}, [id]); // useEffect()

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
								{crewmate.name}
							</span>
						</p>

						<p>
							<strong>
								Speed:
							</strong>

							<span>
								{crewmate.speed}
							</span>

						</p>

						<p>
							<strong>
								Color:
							</strong>
						</p>

						<span>
							{crewmate.color}
						</span>
					</section>

				</header>

			</main>

		</>
	);
} // EditCrewmate()

//==============================================================

export { EditCrewmate };
