import {
	createClient
} from "@supabase/supabase-js";

//====================================================================

const URL =
	import.meta.env
		.VITE_CREWMATES_PROJECT_URL;

//====================================================================

const API_KEY =
	import.meta.env
		.VITE_CREWMATES_API_KEY;

//====================================================================

const supabase =
	createClient(
		URL,
		API_KEY
	);

//====================================================================

export { supabase };