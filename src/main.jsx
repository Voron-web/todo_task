import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ThemeProvider from "./context/ThemeProvider";
import ListProvider from "./context/ListProvider";

createRoot(document.getElementById("root")).render(
	// <StrictMode>
	<ListProvider>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</ListProvider>
	// </StrictMode>
);
