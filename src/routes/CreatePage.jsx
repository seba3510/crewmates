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

	function checkSpeed(speed) {

		const pattern =
			/([0-9]+)/

		const value =
			speed
				.value
				.trim();

		const doesPatternMatch =
			pattern.test(
				value
			);

		if (!doesPatternMatch) {

			const message =
				"The value must be " +
				"a number.";

			throw new TypeError(message);

		} // if

		return true;

	} // checkSpeed()

	//===================================================================================

	function checkName(name) {

		const value =
			name
				.value
				.trim();

		const isValid =
			(value !== "");

		if (!isValid) {

			const message =
				"Please enter the name " +
				"of the crewmate.";

			throw new Error(message);

		} // if

		return true;

	} // checkName()

	//===================================================================================

	function checkColor(colors) {

		let isSelected = false;

		colors.forEach((color) => {

			const isColorSelected =
				(color.checked);

			if (isColorSelected) {

				isSelected =
					true;

			} // if

		}); // forEach()

		if (!isSelected) {

			const message =
				"Please select a color.";

			throw new Error(message);

		} // if

		return true;

	} // checkColor()

	//===================================================================================

	async function createCrewmate(event) {

		try {

			event.preventDefault();

			const target =
				event.target;

			const isName =
				(target[0].name ===
					"crewmate_name");

			const isSpeed =
				(target[1].name ===
					"crewmate_speed");

			const colors =
				[
					target[3],
					target[4],
					target[5],
					target[6],
					target[7],
					target[8],
					target[9],
					target[10]
				];

			if (isName) {

				checkName(
					target[0]
				);

			} // if

			else if (isSpeed) {

				checkSpeed(
					target[1]
				);

			} // else if

			else {

				checkColor(
					colors
				);

			} // else

			const isNameValid =
				(checkName(target[0]));

			const isSpeedValid =
				(checkSpeed(target[1]));

			const isColorSelected =
				(checkColor(colors));

			const isDataValid =
				(isNameValid) &&
				(isSpeedValid) &&
				(isColorSelected);

			if (isDataValid) {

				alert("The form data is valid!");

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