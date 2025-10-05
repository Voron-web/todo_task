import { css } from "@emotion/react";
import { useThemeSet } from "../context/ThemeProvider";

const ModalWindow = ({ children, closeModal }) => {
	const { theme } = useThemeSet();

	const style = {
		modalWrapper: css({
			position: "fixed",
			inset: 0,
			top: 0,
			left: 0,
			background: "#00000050",
			animation: `${isShow ? openShadow : closeShadow} 0.7s ease forwards`,
		}),
		modalWindow: css({
			padding: "15px",
			borderRadius: "24px",
			background: `${theme.primaryColor}`,
			boxShadow: `${theme.boxShadow}`,
			position: "fixed",
			top: "55px",
			right: "20px",
			zIndex: "500",
			border: `${theme.border}`,
			width: "min(600px, 100%)",
			animation: `${isShow ? openWindow : closeWindow} 0.7s ease forwards`,
		}),
	};

	return (
		<div css={style.modalWrapper}>
			<div css={style.modalWindow}></div>
		</div>
	);
};

export default ModalWindow;

const openWindow = keyframes`
from {transform: translate(100%, 0); opacity: 0};
to {transform: translate(0, 0); opacity: 1}`;

const closeWindow = keyframes`
from {transform: translate(0%, 0); opacity: 1};
to {transform: translate(100%, 0); opacity: 0}`;

const openShadow = keyframes`
from { opacity: 0};
to { opacity: 1}`;

const closeShadow = keyframes`
from { opacity: 1};
to {opacity: 0}`;
