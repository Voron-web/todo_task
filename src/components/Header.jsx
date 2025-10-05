import { css } from "@emotion/react";
import { useThemeSet } from "../context/ThemeProvider";
import ModalWindow from "./ModalWindow";

const Header = () => {
	const { theme } = useThemeSet();

	const style = {
		header: css({
			background: `${theme.primaryColor}`,
			border: theme.border,
			boxShadow: `${theme.boxShadow}`,
		}),
		headerContent: css({
			height: "50px",
			display: "flex",
			alignItems: "center",
			justifyContent: "space-between",
		}),
		logo: css({
			fontFamily: '"Ultra", serif',
			fontSize: "32px",
			userSelect: "none",
			color: `${theme.accentColor}`,
		}),
	};

	return (
		<>
			<div css={style.header}>
				<div className="wrapper">
					<div css={style.headerContent}>
						<div css={style.logo}>ToDo List</div>
						<div></div>
					</div>
				</div>
			</div>
			<ModalWindow></ModalWindow>
		</>
	);
};

export default Header;
