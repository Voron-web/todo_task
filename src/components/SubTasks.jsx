import { useEffect, useState } from "react";
import CustomCheckbox from "./ui/CustomCheckbox";
import { css, useTheme } from "@emotion/react";
import { useThemeSet } from "../context/ThemeProvider";

const SubTasks = ({ data, onChange }) => {
	const [currentData, setCurrentData] = useState(data);
	const { theme } = useThemeSet();

	const style = {
		subtitle: css({
			marginTop: "10px",
			padding: "20px 15px",
			display: "flex",
			flexDirection: "column",
			gap: "5px",
			background: `${theme.primaryColor}`,
			borderRadius: "20px",
		}),
	};
	const changeData = (index, data) => {
		setCurrentData((prev) =>
			prev.map((item, mapIndex) => {
				if (index === mapIndex) {
					return data;
				}
				return item;
			})
		);
	};

	useEffect(() => onChange(currentData));
	return (
		<div css={style.subtitle}>
			{currentData.length !== 0
				? currentData.map((item, index) => {
						return <CustomCheckbox id={index} key={index} data={item} title={item.title} onChange={changeData}></CustomCheckbox>;
				  })
				: null}
		</div>
	);
};

export default SubTasks;
