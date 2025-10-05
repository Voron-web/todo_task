import { css } from "@emotion/react";
import { useState } from "react";

const CustomInput = ({ placeholder = "", value, onChange }) => {
	const style = {
		input: css({
			width: "100%",
			height: "100%",
			background: "transparent",
			font: "inherit",
			color: "inherit",
		}),
	};
	return (
		<>
			<input css={style.input} placeholder={placeholder} value={value} onChange={(event) => onChange(event.target.value)} type="text" />
		</>
	);
};
export default CustomInput;
