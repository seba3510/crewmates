import { useRouteError } from "react-router-dom";

//========================================================================

function ErrorPage() {

	const error =
		useRouteError();

	//===================================================================================

	console.error(error);

	//===================================================================================

	const statusText =
		error.statusText;

	//===================================================================================

	const message =
		error.message;

	//===================================================================================

	return (

		<main>
			<header>
				<h1>Oops!</h1>
				<p>Sorry, an unexpected error has occurred :(</p>
			</header>

			<section>
				<p>
					{statusText ||
						message}
				</p>
			</section>
		</main>

	);

} // ErrorPage()

//===================================================================================

export { ErrorPage };