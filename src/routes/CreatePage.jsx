import "../styles/create-page.css";

//===================================================================================

import { SideBar } from "../components/SideBar.jsx";

//===================================================================================

import crewmates
	from "../assets/images/home-page/Crewmates.png";

//===================================================================================

import { useState } from "react";

//===================================================================================

// import { supabase } from "../client.js";

//===================================================================================

function CreatePage() {

	const [
		crewmate,
		setCrewmate
	] =
		useState({
			name: "",
			miles: 0.0,
			color: ""
		});

	//===================================================================================

	function handleInputChange(event) {

		/*
		* Extract "name" and "value" property of 
		* input field, and create an object with those
		* 2 properties.
		*/
		const {
			name,
			value
		} = event.target;

		/*
		* Creates a Dictionary. The key of the 
		* Dictionary is the name of the control, and the
		* value is the value of the input field.
		*/
		setCrewmate((prev) => {
			return {
				...prev,
				[name]: value
			};
		});

	} // handleTextChange()

	//===================================================================================

	function checkSpeed(value) {

		const pattern =
			/(\d)+/;

		const doesPatternMatch =
			pattern.test(value);

		if (!doesPatternMatch) {

			const message =
				"The value must be " +
				"a number.";

			throw new TypeError(message);

		} // if

		return true;

	} // checkSpeed()

	//===================================================================================

	async function createCrewmate(event) {

		try {

			event.preventDefault();

			const target =
				event.target;

			const isSpeed =
				target.name === "crewmate_speed";

			if (isSpeed) {

				checkSpeed(target);

			} // if

			const isSpeedValid =
				(checkSpeed(target));

			if (isSpeedValid) {

				console.log(`Name: ${crewmate.name}`);

				console.log(`Speed: ${parseFloat(crewmate.miles)}`);

				console.log(`Color: ${crewmate.color}`);

			} // if

			// await supabase
			// .form("Crewmates")
			// .insert({
			// 	name: crewmate.name,
			// 	miles: crewmate.miles,
			// 	color: crewmate.color
			// }).select();

			const x = 10;


		} // try

		catch (error) {

			alert(error);

		} // catch

	} // createCrewmate()

	//===================================================================================


	return (

		<>
			<SideBar />

			<main>
				<header>
					<h1>Create a New Crewmate</h1>

					<div className="image-container">
						<img
							src={crewmates}
							alt="Crewmates"
						/>
					</div>
				</header>

				<section id="form-container">
					<form onSubmit={createCrewmate}>

						<section id="cards">

							<section className="card">
								<label htmlFor="name">
									Name
								</label>

								<input
									type="text"
									name="crewmate_name"
									placeholder="Enter crewmate's name"
									id="name"
									onChange={handleInputChange}
								/>
							</section>

							<section className="card">

								<label htmlFor="speed">
									Speed (mph)
								</label>

								<input
									type="text"
									name="crewmate_speed"
									placeholder="Enter speed in mph"
									id="speed"
									onChange={handleInputChange}
								/>

							</section>

							<section className="card">

								<fieldset>

									<legend>Color</legend>

									<div>
										<input
											type="radio"
											name="color"
											value="Red"
											id="red"
											onChange={handleInputChange}
										/>

										<label htmlFor="red">
											Red
										</label>
									</div>

									<div>
										<input
											type="radio"
											name="color"
											value="Green"
											id="green"
											onChange={handleInputChange}
										/>

										<label htmlFor="green">
											Green
										</label>

									</div>

									<div>
										<input
											type="radio"
											name="color"
											value="Blue"
											id="blue"
											onChange={handleInputChange}
										/>

										<label htmlFor="blue">
											Blue
										</label>
									</div>

									<div>
										<input
											type="radio"
											name="color"
											value="Purple"
											id="purple"
											onChange={handleInputChange}
										/>

										<label htmlFor="purple">
											Purple
										</label>
									</div>

									<div>
										<input
											type="radio"
											name="color"
											value="Yellow"
											id="yellow"
											onChange={handleInputChange}
										/>

										<label htmlFor="yellow">
											Yellow
										</label>
									</div>

									<div>
										<input
											type="radio"
											name="color"
											value="Orange"
											id="orange"
											onChange={handleInputChange}
										/>

										<label htmlFor="orange">
											Orange
										</label>
									</div>

									<div>
										<input
											type="radio"
											name="color"
											value="Pink"
											id="pink"
											onChange={handleInputChange}
										/>

										<label htmlFor="pink">
											Pink
										</label>
									</div>

									<div>
										<input
											type="radio"
											name="color"
											value="Rainbow"
											id="rainbow"
											onChange={handleInputChange}
										/>

										<label htmlFor="rainbow">
											Rainbow
										</label>
									</div>


								</fieldset>

							</section>
						</section>


						<div className="btn-container">
							<button
								type="submit"
							>
								Create Crewmate
							</button>
						</div>

					</form>

				</section>

			</main>
		</>
	);

} // CreatePage()

//===================================================================================

export { CreatePage };