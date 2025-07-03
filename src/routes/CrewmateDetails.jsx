import {
	useParams
} from "react-router-dom";

//============================================================

import {
	useEffect,
	useState
} from "react";

//============================================================

import {
	supabase
} from "../client.js";

//============================================================

import {
	SideBar
} from "../components/SideBar.jsx";

//============================================================

import "../styles/details-page.css";

//============================================================

import crewmatesImage
	from "../assets/images/Crewmates_Discussion.png";

//============================================================

function CrewmateDetails() {

	const {
		id
	} =
		useParams();

	//============================================================

	const [
		crewmate,
		setCrewmate
	] =
		useState({
			name: "",
			speed: 0,
			color: ""
		});

	//============================================================

	async function fetchCrewmate() {

		try {

			const {
				data,
				error
			} =
				await supabase
					.from("Crewmates")
					.select("*")
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

			const message =
				error.message;

			alert(message);

		} // catch

	} // fetchCrewmate()

	//============================================================

	useEffect(() => {

		fetchCrewmate();

	}, [id]); // useEffect()

	//============================================================

	const isSpeedFast =
		(crewmate.speed
			>= parseFloat(20));

	//============================================================

	const slowMessage =
		"You may want to find a " +
		"Crewmate with more speed. " +
		"This one is kind of slow 😬";

	//============================================================

	const fastMessage =
		"Your crewmate is " +
		"really fast!";

	//============================================================

	function displayEditPage() {

		const location =
			`/edit/${id}`;

		window.location =
			location;

	} // displayEditPage()

	//============================================================


	return (

		<>

			<SideBar />

			<main>

				<header>
					<h1>
						Crewmate:  {crewmate.name}
					</h1>

					<section id="stats">

						<h2>
							Stats
						</h2>

						<h3>
							Color: {crewmate.color}
						</h3>

						<h3>
							Speed: {crewmate.speed} mph
						</h3>

					</section>

				</header>

				<section id="details">
					{(isSpeedFast) ? (
						<p>
							{fastMessage}
						</p>
					) : (
						<p>
							{slowMessage}
						</p>
					)}

					<div className="container">
						<button
							type="button"
							onClick={displayEditPage}>
							Wanna edit this Crewmate?
						</button>
					</div>

					<div className="container">
						<img
							src={crewmatesImage}
							alt="Crewmates arguing over who is the imposter"
						/>
					</div>
				</section>

			</main>
		</>

	);

} // CrewmateDetails()

//============================================================

export { CrewmateDetails };