import { css, keyframes } from "@emotion/react";
import { useThemeSet } from "../context/ThemeProvider";

const ModalWindow = ({ title, isShow, children, closeModal }) => {
	const { theme } = useThemeSet();

	const style = {
		modalWrapper: css({
			position: "fixed",
			inset: 0,
			top: 0,
			left: 0,
			zIndex: 500,
			background: "#00000050",
			animation: `${isShow ? openShadow : closeShadow} 0.7s ease forwards`,
		}),
		modalWindow: css({
			padding: "15px",
			borderRadius: "24px",
			background: `${theme.primaryColor}`,
			boxShadow: `${theme.boxShadow}`,
			position: "fixed",
			top: "50%",
			left: "50%",
			transform: "translate(-50%, -50%)",
			zIndex: "500",
			border: `${theme.border}`,
			// width: "min(200px, 100%)",
			animation: `${isShow ? openWindow : closeWindow} 0.7s ease forwards`,
		}),
		contentBlock: css({
			padding: "20px",
			background: `${theme.bg}`,
			borderRadius: "20px",
		}),
		btnBlock: css({
			padding: "10px",
			width: "100%",
			display: "flex",
			justifyContent: "flex-end",
		}),
		button: css({
			width: "40px",
			height: "40px",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			border: `${theme.border}`,
			borderRadius: "50%",
			background: `${theme.primaryColor}`,
			cursor: "pointer",
			transition: "0.3s",
			"&:hover": {
				transform: "scale(1.1)",
				background: `${theme.bg}`,
				boxShadow: `${theme.boxShadow}`,
			},
			"& svg": {
				width: "25px",
				stroke: `${theme.textColor}`,
				fill: `${theme.textColor}`,
			},
		}),
		title: css({
			marginBottom: "30px",
			color: `${theme.titleColor}`,
			fontSize: "24px",
			fontWeight: "600",
			textWrap: "nowrap",
		}),
	};

	return (
		<div onClick={() => closeModal()} css={style.modalWrapper}>
			<div onClick={(e) => e.stopPropagation()} css={style.modalWindow}>
				<div css={style.btnBlock}>
					<div css={style.button} onClick={closeModal}>
						<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<g>
								<path d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z"></path>
							</g>
						</svg>
					</div>
				</div>
				<div css={style.contentBlock}>
					<div css={style.title}>{title}</div>
					{children}
				</div>
			</div>
		</div>
	);
};

export default ModalWindow;

const openWindow = keyframes`
from {transform: translate(-50%, -200%); opacity: 0};
to {transform: translate(-50%, -50%); opacity: 1}`;

const closeWindow = keyframes`
from {transform: translate(-50%, -50%); opacity: 1};
to {transform: translate(-50%, 200%); opacity: 0}`;

const openShadow = keyframes`
from { opacity: 0};
to { opacity: 1}`;

const closeShadow = keyframes`
from { opacity: 1};
to {opacity: 0}`;
