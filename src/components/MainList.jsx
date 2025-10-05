import { css } from "@emotion/react";
import { useTask } from "../context/ListProvider";
import { useThemeSet } from "../context/ThemeProvider";
import ListItem from "./ListItem";
import ListPanel from "./ListPanel";

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
	};

	return (
		<div css={style.listWrapper}>
			<ListPanel onNewTaskClick={() => onTaskClick(null)}></ListPanel>
			<div css={style.list}>
				{task.map((taskItem, index) => {
					return <ListItem key={index} task={taskItem} onClick={() => onTaskClick(taskItem)}></ListItem>;
				})}
			</div>
		</div>
	);
};

export default MainList;
