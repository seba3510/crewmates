import {
	Link
} from "react-router-dom";

//============================================================

import crewmate
	from "../assets/images/crewmate.svg";

//============================================================

function Card(
	{
		id,
		name,
		speed,
		color
	}) {

	//============================================================

	const isRainbow =
		(color ===
			"Rainbow");

	//============================================================

	return (

		<>

			<section className="card"
				style={{
					boxShadow: (isRainbow)
						? "7px -5px 10px 0px #4B0082, 11px -9px 10px 0px #0000FF, 16px -14px 10px 0px #00FF00, 20px -17px 10px 0px #FFFF00, 24px -19px 10px 0px #FF7F00, 27px -23px 10px 0px #FF0000, 5px 5px 15px 5px rgba(0,0,0,0)"
						: `5px -8px 14px 5px ${color}`,
					WebkitBoxShadow: (isRainbow)
						? "7px -5px 10px 0px #4B0082, 11px -9px 10px 0px #0000FF, 16px -14px 10px 0px #00FF00, 20px -17px 10px 0px #FFFF00, 24px -19px 10px 0px #FF7F00, 27px -23px 10px 0px #FF0000, 5px 5px 15px 5px rgba(0,0,0,0)"
						: `5px -8px 14px 5px${color}`
				}}>


				<ul>

					<li>

						<img
							src={crewmate}
							alt="This is a crewmate."
						/>

					</li>

					<li>

						<strong>
							Name of Crewmate: &#32;
						</strong>

						<span>
							{name}
						</span>

					</li>

					<li>

						<strong>
							Speed of Crewmate: &#32;
						</strong>

						<span>
							{speed} mph
						</span>

					</li>

					<li>
						<strong>
							Color of Crewmate: &#32;
						</strong>

						<span>
							{color}
						</span>
					</li>

				</ul>


				<div>

					<Link to={`/edit/${id}`}>

						<button
							type="button"
						>
							Edit Crewmate
						</button>

					</Link>

				</div>

			</section>
		</>

	);

} // Card()

//============================================================

export { Card };