import "../styles/create-page.css";

//===================================================================================

import { SideBar } from "../components/SideBar.jsx";

//===================================================================================

import crewmates
	from "../assets/images/home-page/Crewmates.png";

//===================================================================================

function CreatePage() {

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
					<form>

						<section id="cards">

							<section className="card">
								<label for="name">
									Name
								</label>

								<input
									type="text"
									name="crewmate_name"
									placeholder="Enter crewmate's name"
									id="name"
								/>
							</section>

							<section className="card">

								<label for="speed">
									Speed (mph)
								</label>

								<input
									type="text"
									name="crewmate_speed"
									placeholder="Enter speed in mph"
									id="speed"
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
										/>

										<label for="red">
											Red
										</label>
									</div>

									<div>
										<input
											type="radio"
											name="color"
											value="Green"
											id="green"
										/>

										<label for="green">
											Green
										</label>

									</div>

									<div>
										<input
											type="radio"
											name="color"
											value="Blue"
											id="blue"
										/>

										<label for="blue">
											Blue
										</label>
									</div>

									<div>
										<input
											type="radio"
											name="color"
											value="Purple"
											id="purple"
										/>

										<label for="purple">
											Purple
										</label>
									</div>

									<div>
										<input
											type="radio"
											name="color"
											value="Yellow"
											id="yellow"
										/>

										<label for="yellow">
											Yellow
										</label>
									</div>

									<div>
										<input
											type="radio"
											name="color"
											value="Orange"
											id="orange"
										/>

										<label for="orange">
											Orange
										</label>
									</div>

									<div>
										<input
											type="radio"
											name="color"
											value="Pink"
											id="pink"
										/>

										<label for="pink">
											Pink
										</label>
									</div>

									<div>
										<input
											type="radio"
											name="color"
											value="Rainbow"
											id="rainbow"
										/>

										<label for="rainbow">
											Rainbow
										</label>
									</div>


								</fieldset>

							</section>
						</section>


						<div id="btn-container">
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