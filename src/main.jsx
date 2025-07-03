import {
	StrictMode
} from 'react';

//=================================================================================

import {
	createRoot
} from 'react-dom/client'

//=================================================================================

import "./styles/resets.css";

//=================================================================================

import { App } from "./App.jsx"

//=================================================================================

import {
	BrowserRouter,
	Route,
	Routes
} from "react-router-dom";

//=================================================================================

import {
	CreateCrewmate
} from "./routes/CreateCrewmate.jsx";

//=================================================================================

import {
	CrewmateGallery
} from "./routes/CrewmateGalley.jsx";

//=================================================================================

import {
	ErrorPage
} from "./routes/ErrorPage.jsx";

//=================================================================================

import {
	EditCrewmate
} from "./routes/EditCrewmate.jsx";

//=================================================================================

import {
	CrewmateDetails
} from "./routes/CrewmateDetails.jsx";

//=================================================================================


const crewmates = [];

//=================================================================================

const root =
	document.querySelector(
		"#root"
	);

//=================================================================================

createRoot(root).render(
	<StrictMode>

		<BrowserRouter>

			<Routes>

				<Route
					path="/"
					element={<App />}
					errorElement={<ErrorPage />}
				/>

				<Route
					path="/create"
					element={<CreateCrewmate />}
					errorElement={<ErrorPage />}
				/>

				<Route
					path="/gallery"
					element={
						<CrewmateGallery
							gallery={crewmates} />
					}
					errorElement={<ErrorPage />}
				/>

				<Route
					path="/edit/:id"
					element={<EditCrewmate />}
					errorElement={<ErrorPage />}
				/>

				<Route
					path="/details"
					element={<CrewmateDetails />}
				/>



			</Routes>

		</BrowserRouter>

	</StrictMode>
);