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

function CreateCrewmate() {

	const [
		crewmate,
		setCrewmate
	] =
		useState({
			name: "",
			speed: "",
			color: ""
		});

	//===================================================================================

	const [
		selectedColor,
		setSelectedColor
	] =
		useState("");

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
			/([0-9]+)/;

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

				setSelectedColor(
					color.value
				);

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

	function getSelectedColor(colors) {

		let result = "";

		colors.forEach((color) => {

			const isSelected =
				(color.checked);

			if (isSelected) {

				result =
					color.value;

			} // if

		}); // forEach()

		return result;

	} // getSelectedColor()

	//===================================================================================

	async function createCrewmate(event) {

		try {

			event.preventDefault();

			const target =
				event.target;

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

			const isNameValid = (
				checkName(
					target[0]
				)
			);

			const isSpeedValid = (
				checkSpeed(
					target[1]
				)
			);

			const isColorSelected = (
				checkColor(
					colors
				)
			);

			const isDataValid =
				(isNameValid) &&
				(isSpeedValid) &&
				(isColorSelected);

			if (isDataValid) {

				let nameInput =
					target[0].value.trim();

				let milesInput =
					parseFloat(
						target[1].value
					);

				let selectedColor =
					getSelectedColor(
						colors
					);

				setCrewmate({
					name: nameInput,
					speed: milesInput,
					color: selectedColor
				});

				const {
					error
				} =
					await supabase
						.from("Crewmates")
						.insert({
							name: nameInput,
							speed: milesInput,
							color: selectedColor
						}).select();

				checkError(
					error
				);

				clearForm(
					target,
					colors
				);

			} // if

		} // try

		catch (error) {

			const message =
				error.message;

			alert(message);

		} // catch

	} // createCrewmate()

	//===================================================================================

	function clearForm(target, colors) {

		target[0].value = "";

		target[1].value = "";

		colors.forEach((color) => {

			const isSelected =
				(color.checked);

			if (isSelected) {

				color.checked =
					(!color.checked);

			} // if

		}); // forEach()

	} // clearForm()

	//===================================================================================

	function checkError(error) {

		const message =
			"The crewmate has " +
			"been created!";

		if (error) {

			throw error;

		} // if

		else {

			alert(message);

		} // else

	} // checkError()

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
					<form
						onSubmit={createCrewmate}>

						<section id="cards">

							<section className="card">
								<label htmlFor="name">
									Name
								</label>

								<div
									className="form-control"
								>

									<input
										type="text"
										name="crewmate_name"
										placeholder="Enter crewmate's name"
										id="name"
										onChange={handleInputChange}
									/>

								</div>

							</section>

							<section className="card">

								<label htmlFor="speed">
									Speed (mph)
								</label>

								<div className="form-control">

									<input
										type="text"
										name="crewmate_speed"
										placeholder="Enter speed in mph"
										id="speed"
										onChange={handleInputChange}
									/>

								</div>

							</section>

							<section className="card">

								<fieldset>

									<legend>Color</legend>

									<div className="form-control">
										<input
											type="radio"
											name="crewmate_color"
											value="Red"
											id="red"
											onChange={handleInputChange}
										/>

										<label htmlFor="red">
											Red
										</label>
									</div>

									<div className="form-control">
										<input
											type="radio"
											name="crewmate_color"
											value="Green"
											id="green"
											onChange={handleInputChange}
										/>

										<label htmlFor="green">
											Green
										</label>

									</div>

									<div className="form-control">
										<input
											type="radio"
											name="crewmate_color"
											value="Blue"
											id="blue"
											onChange={handleInputChange}
										/>

										<label htmlFor="blue">
											Blue
										</label>
									</div>

									<div className="form-control">
										<input
											type="radio"
											name="crewmate_color"
											value="Purple"
											id="purple"
											onChange={handleInputChange}
										/>

										<label htmlFor="purple">
											Purple
										</label>
									</div>

									<div className="form-control">
										<input
											type="radio"
											name="crewmate_color"
											value="Yellow"
											id="yellow"
											onChange={handleInputChange}
										/>

										<label htmlFor="yellow">
											Yellow
										</label>
									</div>

									<div className="form-control">
										<input
											type="radio"
											name="crewmate_color"
											value="Orange"
											id="orange"
											onChange={handleInputChange}
										/>

										<label htmlFor="orange">
											Orange
										</label>
									</div>

									<div className="form-control">
										<input
											type="radio"
											name="crewmate_color"
											value="Pink"
											id="pink"
											onChange={handleInputChange}
										/>

										<label htmlFor="pink">
											Pink
										</label>
									</div>

									<div className="form-control">
										<input
											type="radio"
											name="crewmate_color"
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


						<div
							className="form-control">
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

export { CreateCrewmate };