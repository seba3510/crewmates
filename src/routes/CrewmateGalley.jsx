import {
	SideBar
} from "../components/SideBar.jsx";

//=================================================================

import {
	Card
} from "../components/Card.jsx";

//=================================================================

import {
	useState,
	useEffect
} from "react";

//=================================================================

import "../styles/gallery-page.css";

//=================================================================

import {
	supabase
} from "../client.js";

//=================================================================

import {
	Link
} from "react-router-dom";

//=================================================================

function CrewmateGallery({ gallery }) {

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
					.select("*")
					.order("created_at", {
						ascending: true
					});

			if (error) {

				throw error;

			} // if

			else {

				console.log(data);

				setCrewmates(
					data
				);

			} // else

		} // try

		catch (error) {

			const message =
				error.message;

			alert(message);

		} // catch

	} // fetchGallery()

	//=================================================================

	useEffect(() => {

		fetchGallery();

	}, [gallery]); // useEffect()

	//=================================================================

	const numCrewmates =
		crewmates.length;

	//=================================================================

	const isGalleryEmpty =
		(numCrewmates
			=== 0);

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
						<>

							<h3>You haven't made a crewmate yet!</h3>

							<div
								className="btn-container"
							>

								<button
									type="button"
									onClick={handleClick}
									id="create-btn"
								>
									Create one here!
								</button>

							</div>

						</>

					}
				</header>

				<section id="cards">
					{(!isGalleryEmpty) && (

						crewmates.map((crewmate) => (


							<Link to={`/details/${crewmate.id}`}
								key={crewmate.id}
								style={{ textDecoration: "none" }}>

								<Card
									id={crewmate.id}
									name={crewmate.name}
									speed={crewmate.speed}
									color={crewmate.color}
								/>

							</Link>

						)) // map()

					)}

				</section>

			</main>

		</>

	);

} // CrewmateGallery()

//=================================================================

export { CrewmateGallery };