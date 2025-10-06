import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { useThemeSet } from "../../context/ThemeProvider";

const CustomCheckbox = ({ id, data, onChange }) => {
	const [currentData, setCurrentData] = useState(data);
	const { theme } = useThemeSet();

	const changeData = (name, data, id) => {
		const newData = { ...currentData, [name]: data };
		setCurrentData(newData);
		onChange(id, newData);
	};

	const style = {
		main: css({
			display: "flex",
			alignItems: "center",
			gap: "6px",
		}),
		input: css({
			position: "absolute",
			visibility: "hidden",
		}),
		checkboxBlock: css({
			position: "relative",
			width: "30px",
			height: "30px",
			border: `${theme.border}`,
			cursor: "pointer",
			borderRadius: "7px",
			boxShadow: `${theme.boxShadow}`,
			background: `${theme.secondatyColor}`,
			transition: "0.3s",
			"&:hover": {
				background: `${theme.bg}`,
			},
			"& svg": {
				position: "absolute",
				width: "100%",
				top: "50%",
				left: "50%",
				transform: "translate(-50%, -50%)",
				fill: `${theme.accentColor}`,
			},
		}),
		textInput: css({
			width: "100%",
			height: "100%",
			background: "transparent",
			font: "inherit",
			color: "inherit",
			textDecoration: `${data.enable ? "line-through" : ""}`,
			opacity: `${data.enable ? "0.5" : "1"}`,
		}),
	};

	return (
		<div css={style.main}>
			<label htmlFor={id}>
				<div css={style.checkboxBlock}>
					{currentData.enable ? (
						<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60.499 60.499">
							<g>
								<path d="M58.968,12.734c-2.193-2.423-5.936-2.608-8.359-0.415L24.481,35.975L9.991,22.218c-2.371-2.25-6.117-2.152-8.366,0.218 c-2.249,2.37-2.152,6.115,0.218,8.365l18.208,17.283c1.145,1.088,2.609,1.627,4.072,1.627c0.822,0,1.643-0.176,2.406-0.516 c0.885-0.232,1.729-0.674,2.455-1.332l29.568-26.771C60.976,18.899,61.161,15.157,58.968,12.734z"></path>
							</g>
						</svg>
					) : null}
				</div>
			</label>
			<input
				css={style.textInput}
				type="text"
				value={currentData.title}
				onChange={(event) => {
					changeData("title", event.target.value, id);
				}}
			/>
			<input
				css={style.input}
				id={id}
				type="checkbox"
				checked={currentData.enable}
				onChange={(event) => {
					changeData("enable", event.target.checked, id);
				}}
			/>
		</div>
	);
};

export default CustomCheckbox;
