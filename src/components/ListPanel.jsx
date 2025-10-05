import { css } from "@emotion/react";
import { useThemeSet } from "../context/ThemeProvider";

const ListPanel = ({ onNewTaskClick }) => {
	const { theme } = useThemeSet();
	const style = {
		panel: css({
			padding: "10px 5px",
			display: "flex",
		}),
		buttonAdd: css({
			width: "40px",
			height: "40px",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			fontSize: "40px",
			fontWeight: "300",
			border: `${theme.border}`,
			borderRadius: "50%",
			background: `${theme.primaryColor}`,
			cursor: "pointer",
			"&:hover": {
				background: `${theme.bg}`,
				boxShadow: `${theme.boxShadow}`,
			},
			"& svg": {
				width: "35px",
				stroke: `${theme.textColor}`,
			},
		}),
	};

	return (
		<div css={style.panel}>
			<div css={style.buttonAdd} onClick={() => onNewTaskClick()}>
				<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g>
						<path d="M6 12H18M12 6V18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
					</g>
				</svg>
			</div>
		</div>
	);
};

export default ListPanel;
