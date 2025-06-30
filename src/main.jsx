import { StrictMode } from 'react';
//=================================================================================

import { createRoot } from 'react-dom/client'

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

import { CreatePage } from "./routes/CreatePage.jsx";

//=================================================================================

import { CrewmateGallery } from "./routes/CrewmateGalley.jsx";

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
				/>

				<Route
					path="create"
					element={<CreatePage />}
				/>

				<Route
					path="gallery"
					element={<CrewmateGallery />}
				/>


			</Routes>

		</BrowserRouter>

	</StrictMode>
);
