import image from
	"../assets/images/home-page/Crewmate_in_Ventilator.png";

//===================================================================================

import {
	Link
} from "react-router-dom";

//===================================================================================

function SideBar() {

	return (

		<section id="sidebar">

			<header>

				<nav>
					<ul>

						<li>

							<Link to="/">
								Home
							</Link>
						</li>

						<li>
							<Link to="/create">
								Create a Crewmate!
							</Link>
						</li>

						<li>
							<Link to="/gallery">
								Crewmate Gallery
							</Link>
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