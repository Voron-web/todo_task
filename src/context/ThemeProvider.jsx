import { createContext, useContext, useState } from "react";
import { light } from "../themes/themes";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState(light);

	const changeTheme = (newTheme) => {
		setTheme(newTheme);
	};
	return <ThemeContext.Provider value={{ theme, changeTheme }}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;

export const useThemeSet = () => useContext(ThemeContext);
