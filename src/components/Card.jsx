import {
	useState,
	useEffect
} from "react";

//============================================================

import crewmate
	from "../assets/images/crewmate.svg";

//============================================================

function Card(
	{
		name,
		speed,
		color
	}) {


	//============================================================

	return (

		<>


			<section className="card"
				style={{
					boxShadow: `5px 5px 13px 5px ${color}`,
					WebkitBoxShadow: `5px 5px 13px 5px ${color}`
				}}>
				<div className="image-container">

					<ul>

						<li>

							<img
								src={crewmate}
								alt="This is a crewmate."
							/>

						</li>

						<li>
							Name of Crewmate: {name}
						</li>

						<li>
							Speed of Crewmate: {speed}
						</li>

						<li>
							Color of Crewmate: {color}
						</li>
					</ul>
				</div>
				<div>
					<button type="button">
						Edit Crewmate
					</button>
				</div>
			</section >
		</>


	);

} // Card()

//============================================================

export { Card };