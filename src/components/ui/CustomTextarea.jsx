import { css } from "@emotion/react";
import { useState } from "react";
import { useThemeSet } from "../../context/ThemeProvider";

const CustomTextarea = ({ placeholder = "", value, onChange }) => {
	const { theme } = useThemeSet();

	const style = {
		textarea: css({
			marginTop: "10px",
			padding: "10px 15px",
			resize: "none",
			width: "100%",
			font: "inherit",
			background: `${theme.primaryColor}`,
			borderRadius: "20px",
			color: "inherit",
		}),
	};
	return (
		<>
			<textarea
				css={style.textarea}
				placeholder={placeholder}
				rows="4"
				value={value}
				onChange={(event) => onChange(event.target.value)}
				type="text"
			/>
		</>
	);
};
export default CustomTextarea;
