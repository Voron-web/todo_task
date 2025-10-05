import { css } from "@emotion/react";
import { useThemeSet } from "../context/ThemeProvider";

const Header = () => {
	const { theme } = useThemeSet();

	const style = {
		header: css({
			// border: theme.border,
			boxShadow: `0 0 10px 1px ${theme.shadowColor}`,
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
		}),
	};

	return (
		<div css={style.header}>
			<div className="wrapper">
				<div css={style.headerContent}>
					<div css={style.logo}>ToDo List</div>
					<div></div>
				</div>
			</div>
		</div>
	);
};

export default Header;
