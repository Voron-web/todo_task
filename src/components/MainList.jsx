import { css } from "@emotion/react";
import { useTask } from "../context/ListProvider";
import { useThemeSet } from "../context/ThemeProvider";
import ListItem from "./ListItem";
import ListPanel from "./ListPanel";
import image from "../assets/image.png";

const MainList = ({ onTaskClick }) => {
	const { theme } = useThemeSet();
	const { task } = useTask();

	const style = {
		listWrapper: css({
			padding: "16px",
			display: "flex",
			flexDirection: "column",
			gap: "10px",
			width: "100%",
			background: `${theme.primaryColor}`,
			borderRadius: "32px",
			border: `${theme.border}`,
		}),
		list: css({
			flex: "1 0 auto",
			display: "flex",
			flexDirection: "column",

			gap: "20px",
			// width: "min(200px, 100%)",
		}),
		imgBlock: css({
			height: "500px",
			width: "100%",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",

			"& img": {
				width: "150px",
				opacity: 0.5,
				filter: "brightness(120%)",
				transform: "scaleX(-1)",
			},
		}),
		text: css({
			marginTop: "20px",
			color: `${theme.textColor}`,
			fontSize: "16px",
		}),
	};

	return (
		<div css={style.listWrapper}>
			<ListPanel onNewTaskClick={() => onTaskClick(null)}></ListPanel>
			{task.length != 0 ? (
				<div css={style.list}>
					{task.map((taskItem, index) => {
						return <ListItem key={index} task={taskItem} onClick={() => onTaskClick(taskItem)}></ListItem>;
					})}
				</div>
			) : (
				<div css={style.imgBlock}>
					<div css={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
						<img src={image} alt="" />
						<p css={style.text}>All tasks are completed. Waiting for new ones...</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default MainList;
