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
					boxShadow: (color === "Rainbow")
						? "7px -5px 10px 0px #4B0082, 11px -9px 10px 0px #0000FF, 16px -14px 10px 0px #00FF00, 20px -17px 10px 0px #FFFF00, 24px -19px 10px 0px #FF7F00, 27px -23px 10px 0px #FF0000, 5px 5px 15px 5px rgba(0,0,0,0)"
						: `5px -8px 14px 5px ${color}`,
					WebkitBoxShadow: color === "Rainbow"
						? "7px -5px 10px 0px #4B0082, 11px -9px 10px 0px #0000FF, 16px -14px 10px 0px #00FF00, 20px -17px 10px 0px #FFFF00, 24px -19px 10px 0px #FF7F00, 27px -23px 10px 0px #FF0000, 5px 5px 15px 5px rgba(0,0,0,0)"
						: `5px -8px 14px 5px${color}`
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