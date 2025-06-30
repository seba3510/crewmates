import image from "../assets/images/home-page/Crewmate_in_Ventilator.png";

//===================================================================================

function SideBar() {

	return (

		<section id="sidebar">

			<header>

				<nav>
					<ul>
						<li>
							<a href="#">
								Home
							</a>
						</li>

						<li>
							<a href="#">
								Create a Crewmate!
							</a>
						</li>

						<li>
							<a href="#">
								Crewmate Gallery
							</a>
						</li>
					</ul>

				</nav>

			</header>

			<div className="image-container">
				<img
					src={image}
					alt="Imposter hiding in a ventilator."
				/>
			</div>


		</section>
	);

} // SideBar()

//===================================================================================


export { SideBar };