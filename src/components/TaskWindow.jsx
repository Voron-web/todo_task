// This component creates a task settings modal window. If the data props are null, the window remains a new task creation window

import { useEffect, useState } from "react";
import { useThemeSet } from "../context/ThemeProvider";
import { css, keyframes } from "@emotion/react";
import CustomInput from "./ui/CustomInput";
import CustomTextarea from "./ui/CustomTextarea";
import CustomSelect from "./ui/CustomSelect";
import { useTask } from "../context/ListProvider";
import SubTasks from "./SubTasks";

const TaskWindow = ({ data, isShow, closeModal }) => {
	const { theme } = useThemeSet();
	const { changeTask, addTask, removeTask } = useTask();
	const [isValid, setIsValid] = useState(false);
	const [currentData, setCurrentData] = useState(data || { title: "", description: "", status: "todo", priority: "medium", subTasks: [] });

	const statusData = [
		{ title: "To do", value: "todo" },
		{ title: "In process", value: "inProcess" },
		{ title: "Done", value: "done" },
	];
	const priorityData = [
		{ title: "High", value: "high" },
		{ title: "Medium", value: "medium" },
		{ title: "Low", value: "low" },
	];

	const changeData = (type, value) => {
		setCurrentData((prev) => ({
			...prev,
			[type]: value,
		}));
		validateForm();
	};

	const validateForm = () => {
		if (currentData.title && currentData.title !== "") {
			setIsValid(true);
			return true;
		} else {
			setIsValid(false);
			return false;
		}
	};

	const addNewTask = () => {
		if (validateForm()) {
			const date = new Date();
			setCurrentData((prev) => ({ ...prev, id: date, createDate: date }));
			addTask({ ...currentData, id: date, createDate: date });
			filterAndCloseModal();
		}
	};

	const deleteTask = (id) => {
		removeTask(id);
		filterAndCloseModal();
	};

	const filterAndCloseModal = () => {
		if (currentData.subTasks.lenght != 0) {
			const filteredSubTask = currentData.subTasks.filter((item) => {
				return item.title !== "";
			});
			const newData = { ...currentData, subTasks: filteredSubTask };

			setCurrentData(newData);
			if (data && validateForm()) {
				changeTask(newData);
			}
		}

		closeModal();
	};

	const style = {
		taskWrapper: css({
			position: "fixed",
			inset: 0,
			top: 0,
			left: 0,
			background: "#00000050",
			animation: `${isShow ? openShadow : closeShadow} 0.7s ease forwards`,
		}),
		taskWindow: css({
			overflow: "hidden",
			padding: "15px",
			borderRadius: "24px",
			background: `${theme.primaryColor}`,
			boxShadow: `${theme.boxShadow}`,
			position: "fixed",
			top: "55px",
			right: "20px",
			zIndex: "500",
			border: `${theme.border}`,
			color: `${theme.textColor}`,
			width: "min(600px, 90%)",
			maxHeight: "90%",
			animation: `${isShow ? openWindow : closeWindow} 0.7s ease forwards`,
		}),
		contentBlock: css({
			maxHeight: "calc(90vh - 100px)",
			height: "100%",
			overflowY: "auto",
			padding: "20px",
			background: `${theme.bg}`,
			borderRadius: "20px",
		}),

		title: css({
			marginBottom: "20px",
			width: "100%",
			fontSize: "40px",
			fontWeight: 600,
			color: `${theme.titleColor}`,
		}),
		subTitle: css({
			marginLeft: "7px",
			fontSize: "16px",
			fontWeight: 500,
		}),
		description: css({
			width: "100%",
			fontSize: "16px",
			color: `${theme.textColor}`,
		}),
		subTasks: css({
			fontSize: "16px",
			fontWeight: 600,
		}),
		btnBlock: css({
			padding: "10px",
			width: "100%",
			display: "flex",
			justifyContent: "space-between",
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

		separator: css({
			margin: "20px 0",
			height: "2px",
			width: "100%",
			background: `${theme.primaryColor}`,
		}),
		date: css({
			marginTop: "20px",
			width: "100%",
			display: "flex",
			justifyContent: "flex-end",
			opacity: 0.5,
			fontSize: "13px",
		}),
	};

	return (
		<div css={style.taskWrapper} onClick={filterAndCloseModal}>
			<div css={style.taskWindow} onClick={(e) => e.stopPropagation()}>
				<div css={style.btnBlock}>
					<div>
						{!data && isValid ? (
							<div css={style.button} onClick={addNewTask}>
								<svg
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
									stroke="#2dc90eff"
									stroke-width="4"
									stroke-linecap="round"
									stroke-linejoin="round"
									fill="none">
									<g id="SVGRepo_iconCarrier">
										<polyline points="4 13 9 18 20 7" stroke="#19e946ff" fill="none"></polyline>
									</g>
								</svg>
							</div>
						) : null}
						{data ? (
							<div css={style.button} onClick={() => deleteTask(data.id)}>
								<svg fill="#e92020ff" stroke="#e92020ff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="delete-alt-2">
									<g fill="#e92020ff">
										<path d="M17,4V5H15V4H9V5H7V4A2,2,0,0,1,9,2h6A2,2,0,0,1,17,4Z" stroke="#e92020ff"></path>
										<path
											d="M20,6H4A1,1,0,0,0,4,8H5.07l.87,12.14a2,2,0,0,0,2,1.86h8.14a2,2,0,0,0,2-1.86L18.93,8H20a1,1,0,0,0,0-2ZM13,17a1,1,0,0,1-2,0V11a1,1,0,0,1,2,0Z"
											stroke="#e92020ff "></path>
									</g>
								</svg>
							</div>
						) : null}
					</div>
					<div css={style.button} onClick={filterAndCloseModal}>
						<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<g>
								<path d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z"></path>
							</g>
						</svg>
					</div>
				</div>
				<div css={style.contentBlock}>
					<div>
						<div css={style.title}>
							<CustomInput placeholder="Enter a title" value={currentData.title} onChange={(value) => changeData("title", value)}></CustomInput>
						</div>
						<p css={style.subTitle}>Description</p>
						<div css={style.description}>
							<CustomTextarea
								placeholder="Enter your description here"
								value={currentData.description}
								onChange={(value) => changeData("description", value)}></CustomTextarea>
						</div>
						<div css={style.separator}></div>
						<div css={{ display: "flex", gap: "10px", marginTop: "20px", alignItems: "center" }}>
							<p css={style.subTitle}>Status</p>
							<div>
								<CustomSelect value={currentData.status} data={statusData} onChange={(value) => changeData("status", value)}></CustomSelect>
							</div>
						</div>
						<div css={{ display: "flex", gap: "10px", marginTop: "20px", alignItems: "center" }}>
							<p css={style.subTitle}>Priority</p>
							<CustomSelect value={currentData.priority} data={priorityData} onChange={(value) => changeData("priority", value)}></CustomSelect>
						</div>
						<div css={style.separator}></div>
						<div css={style.subTasks}>
							<SubTasks data={currentData.subTasks} onChange={(value) => changeData("subTasks", value)}></SubTasks>
						</div>
						{data ? <div css={style.date}>Create: {new Date(data.createDate).toLocaleDateString()}</div> : null}
					</div>
				</div>
			</div>
		</div>
	);
};

export default TaskWindow;

const openWindow = keyframes`
from {transform: translate(100%, 0); opacity: 0};
to {transform: translate(0, 0); opacity: 1}`;

const closeWindow = keyframes`
from {transform: translate(0%, 0); opacity: 1};
to {transform: translate(100%, 0); opacity: 0}`;

const openShadow = keyframes`
from { opacity: 0};
to { opacity: 1}`;

const closeShadow = keyframes`
from { opacity: 1};
to {opacity: 0}`;
