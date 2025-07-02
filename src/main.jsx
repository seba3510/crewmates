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
	CreatePage
} from "./routes/CreatePage.jsx";

//=================================================================================

import {
	CrewmateGallery
} from "./routes/CrewmateGalley.jsx";

//=================================================================================

import {
	ErrorPage
} from "./routes/ErrorPage.jsx";

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
					path="create"
					element={<CreatePage />}
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

			</Routes>

		</BrowserRouter>

	</StrictMode>
);