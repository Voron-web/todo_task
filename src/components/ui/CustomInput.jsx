import { useState } from "react";

const CustomInput = ({ placeholder = "", value, onChange }) => {
	return (
		<>
			<input placeholder={placeholder} value={value} onChange={(event) => onChange(event.target.value)} type="text" />
		</>
	);
};
export default CustomInput;
