import { css } from "@emotion/react";
import { useThemeSet } from "../../context/ThemeProvider";

const CustomSelect = ({ value, data = [], onChange }) => {
	const { theme } = useThemeSet();

	const style = {
		select: css({
			width: "100px",
			padding: "5px 5px 5px 0",
			color: `${theme.textColor}`,
			fontWeight: 600,
			background: `${theme.primaryColor}`,
			borderRadius: "15px",
			appearance: "none",
			textAlign: "center",
			cursor: "pointer",
			fontSize: "16px",
			border: `${theme.border}`,
			boxShadow: `${theme.boxShadow}`,
			"&:hover": {
				background: `${theme.bg}`,
			},
		}),
	};

	return (
		<select css={style.select} value={value} onChange={(event) => onChange(event.target.value)}>
			{data.map((item, index) => {
				return (
					<option key={index} value={item.value}>
						{item.title}
					</option>
				);
			})}
		</select>
	);
};

export default CustomSelect;
