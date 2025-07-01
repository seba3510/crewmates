import {
	SideBar
} from "../components/SideBar.jsx";

//=================================================================

import { Card } from "../components/Card.jsx";

//=================================================================

import {
	useState,
	useEffect
} from "react";

//=================================================================

import "../styles/gallery-page.css";

//=================================================================

import { supabase } from "../client.js";

//=================================================================

function CrewmateGallery({ props }) {

	const [
		crewmates,
		setCrewmates
	] =
		useState([]);

	//=================================================================

	async function fetchGallery() {

		try {

			const {
				data,
				error
			} =
				await supabase
					.from("Crewmates")
					.select()
					.order("name", {
						ascending: true
					});

			if (error) {

				throw error;

			}

			else {

				console.log(data);

				setCrewmates(data);

			} // if


		} // try

		catch (error) {

			alert(error.message);

		} // catch

	} // fetchGallery()

	//=================================================================


	useEffect(() => {

		fetchGallery();

	}, [props]); // useEffect()

	//=================================================================

	const numCrewmates =
		crewmates.length;

	//=================================================================

	const isGalleryEmpty =
		(numCrewmates === 0);

	//=================================================================

	function handleClick() {

		const location =
			"/create";

		window.location =
			location;

	} // handleClick()

	//=================================================================

	return (

		<>

			<SideBar />

			<main>
				<header>
					<h1>Your Crewmate Gallery!</h1>

					{
						((isGalleryEmpty)) &&
						<h3>You haven't made a crewmate yet!</h3>
					}
				</header>

				<section id="cards">
					{(!isGalleryEmpty) && (
						crewmates.map((crewmate) => (
							<Card
								key={crewmate.id} // Assuming each crewmate has a unique 'id' field
								name={crewmate.name}
								speed={crewmate.speed}
								color={crewmate.color}
							/>
						))
					)}
				</section>


				<div className="btn-container">
					<button type="button" onClick={handleClick}>
						Create one here!
					</button>
				</div>
			</main >

		</>

	);

} // CrewmateGallery()

//=================================================================

export { CrewmateGallery };