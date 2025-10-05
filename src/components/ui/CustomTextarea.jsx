import { useState } from "react";

const CustomTextarea = ({ placeholder = "", value, onChange }) => {
	return (
		<>
			<textarea placeholder={placeholder} value={value} onChange={(event) => onChange(event.target.value)} type="text" />
		</>
	);
};
export default CustomTextarea;
