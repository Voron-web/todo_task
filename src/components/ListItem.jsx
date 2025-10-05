import { css } from "@emotion/react";
import { useTask } from "../context/ListProvider";
import { useThemeSet } from "../context/ThemeProvider";

const ListItem = ({ task, onClick }) => {
	const { theme } = useThemeSet();
	const { setting } = useTask();

	const statusName = { todo: "To do", inProcess: "In process", done: "Done" };

	const style = {
		listItem: css({
			position: "relative",
			width: "100%",
			// border: theme.border,
			padding: "10px",
			borderRadius: "10px",
			cursor: "pointer",
			boxShadow: `3px 3px 7px 1px ${theme.shadowColor}`,
		}),
		title: css({
			paddingRight: "20px",
			marginBottom: "10px",
			fontSize: "20px",
			fontWeight: "500",
		}),
		descriptionText: css({
			marginTop: "10px",
			fontSize: "12px",
			opacity: "0.7",
		}),
		date: css({
			marginTop: "15px",
			fontSize: "10px",
			opacity: 0.6,
			fontWeight: "500",
			textAlign: "end",
		}),
		priority: css({
			position: "absolute",
			top: "10px",
			right: "10px",
			width: "15px",
			height: "15px",
			borderRadius: "50%",
			"&.high": {
				background: "#e21313ff",
				boxShadow: "0 0 3px 1px #e21313ff",
			},
			"&.medium": {
				background: "#43b800ff",
				boxShadow: "0 0 3px 1px #43b800ff",
			},
			"&.low": {
				background: "#1115e0ff",
				boxShadow: "0 0 3px 1px #1115e0ff",
			},
		}),
	};

	return (
		<div css={style.listItem} onClick={() => onClick(task)}>
			<h2 css={style.title}>{task.title}</h2>
			<div className={task.priority} css={style.priority}></div>
			{setting.listItem.showStatus ? (
				<p>
					<span>{"Status:"}</span> {statusName[task.status]}
				</p>
			) : (
				""
			)}
			{setting.listItem.showDescription ? <p css={style.descriptionText}>{task.description}</p> : ""}
			{setting.listItem.showDate ? (
				<p css={style.date}>
					<span>{"Create:"}</span> {new Date(task.createDate).toLocaleDateString()}
				</p>
			) : (
				""
			)}
		</div>
	);
};

export default ListItem;
