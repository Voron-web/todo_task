import { css } from "@emotion/react";
import { useTask } from "../context/ListProvider";
import { useThemeSet } from "../context/ThemeProvider";

const ListItem = ({ task, onClick }) => {
	const { theme } = useThemeSet();
	const { setting } = useTask();

	const statusName = { todo: "To do", inProcess: "In process", done: "Done" };

	const statusStyle = {
		todo: {
			background: "#4f46e5",
			color: "#fff",
		},
		inProcess: {
			background: "#f59e0b",
			color: "#fff",
		},
		done: {
			background: "#eef2ff",
			color: "#4f46e5",
		},
	};

	const style = {
		listItem: css({
			position: "relative",
			width: "100%",
			border: theme.border,
			padding: "20px",
			borderRadius: "24px",
			cursor: "pointer",
			background: `${theme.bg}`,
			boxShadow: `${theme.boxShadow}`,
			color: `${theme.textColor}`,
			"&:hover": {
				boxShadow: `0 2px 4px -2px  ${theme.accentColor}, 0 4px 8px -2px ${theme.accentColor}`,
			},
		}),
		title: css({
			paddingRight: "20px",
			marginBottom: "20px",
			fontSize: "32px",
			fontWeight: "600",
			background: `${theme.bg}`,
			color: `${theme.titleColor}`,
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
			padding: "3px 10px",
			position: "absolute",
			top: "15px",
			right: "15px",
			fontSize: "12px",
			fontWeight: 500,
			borderRadius: "18px",
			"&.high": {
				background: "#fad4d7ff",
				color: "#f43f5e",
			},
			"&.medium": {
				background: "#d6f8e1ff",
				color: "#22c55e",
			},
			"&.low": {
				background: "#eef2ff",
				color: "#4f46e5",
			},
		}),
		status: css({
			padding: "5px 10px",
			borderRadius: "24px",
			...statusStyle[task.status],
		}),
	};

	return (
		<div css={style.listItem} onClick={() => onClick(task)}>
			<h2 css={style.title}>{task.title}</h2>
			<div className={task.priority} css={style.priority}>
				{task.priority.toUpperCase()}
			</div>
			{setting.listItem.showStatus ? (
				<p css={{ marginBottom: "35px" }}>
					<span>{"Status:"}</span> <span css={style.status}>{statusName[task.status]}</span>
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
