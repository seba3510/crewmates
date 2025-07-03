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

	function getFormattedSpeed(speed) {

		const formatter =
			new Intl.NumberFormat("en-US", {
				style: "unit",
				unit: "mile-per-hour",
				unitDisplay: "short",
				minimumFractionDigits: 1,
				maximumFractionDigits: 2
			});

		const result =
			formatter.format(
				speed
			);

		return result;

	} // getFormattedSpeed()


	//============================================================

	const formattedSpeed =
		getFormattedSpeed(
			crewmate.speed
		);

	//============================================================

	return (

		<>

			<SideBar />

			<main>

				<header>
					<h1>
						Crewmate:  {crewmate.name}
					</h1>

					<section id="stats-container">

						<h2>
							Stats:
						</h2>

						<h3>
							Color: {crewmate.color}
						</h3>

						<h3>
							Speed: {formattedSpeed}
						</h3>

					</section>
				</header>

			</main>
		</>

	);

} // CrewmateDetails()

//============================================================

export { CrewmateDetails };