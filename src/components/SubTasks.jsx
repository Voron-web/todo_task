import { useEffect, useState } from "react";
import CustomCheckbox from "./ui/CustomCheckbox";
import { css } from "@emotion/react";
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
		title: css({
			marginLeft: "7px",
			fontSize: "16px",
			fontWeight: 500,
		}),
		btn: css({
			width: "25px",
			height: "25px",
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
	const addSubTask = () => {
		setCurrentData((prev) => {
			const newData = [...prev, { title: "", enable: false }];
			return newData;
		});
	};

	useEffect(() => onChange(currentData));
	return (
		<>
			<div css={{ marginTop: "20px", display: "flex", gap: "20px", alignItems: "center" }}>
				<p css={style.title}>Subtasks</p>
				<div css={style.btn} onClick={() => addSubTask()}>
					<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g>
							<path d="M6 12H18M12 6V18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
						</g>
					</svg>
				</div>
			</div>
			<div css={style.subtitle}>
				{currentData.length !== 0
					? currentData.map((item, index) => {
							return <CustomCheckbox id={index} key={index} data={item} title={item.title} onChange={changeData}></CustomCheckbox>;
					  })
					: null}
			</div>
		</>
	);
};

export default SubTasks;
