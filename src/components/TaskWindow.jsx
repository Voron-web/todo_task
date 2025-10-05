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
		console.log(value);
		setCurrentData((prev) => ({
			...prev,
			[type]: value,
		}));
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
			closeModal();
		}
	};

	const deleteTask = (id) => {
		removeTask(id);
	};

	const style = {
		taskWrapper: css({
			position: "fixed",
			inset: 0,
			top: 0,
			left: 0,
			background: "#00000050",
		}),
		taskWindow: css({
			padding: "20px",
			position: "fixed",
			top: "55px",
			right: "20px",
			zIndex: "500",
			border: `${theme.border}`,
			background: `${theme.bg}`,
			width: "min(400px, 100%)",
			animation: `${isShow ? openWindow : closeWindow} 0.7s ease forwards`,
		}),
	};

	useEffect(() => {
		if (validateForm()) {
			if (data) {
				changeTask(currentData);
			}
		}
	}, [currentData]);

	return (
		<div css={style.taskWrapper} onClick={closeModal}>
			<div css={style.taskWindow} onClick={(e) => e.stopPropagation()}>
				<>
					<CustomInput placeholder="Enter a title" value={currentData.title} onChange={(value) => changeData("title", value)}></CustomInput>
					<div>
						<p>Description</p>
						<CustomTextarea
							placeholder="Description"
							value={currentData.description}
							onChange={(value) => changeData("description", value)}></CustomTextarea>
					</div>
					<div>
						<p>Status</p>
						<CustomSelect value={currentData.status} data={statusData} onChange={(value) => changeData("status", value)}></CustomSelect>
					</div>
					<div>
						<p>Priority</p>
						<CustomSelect value={currentData.priority} data={priorityData} onChange={(value) => changeData("priority", value)}></CustomSelect>
					</div>
					<div>
						<p>Subtasks</p>
						<SubTasks data={data ? currentData.subTasks : []} onChange={(value) => changeData("subTasks", value)}></SubTasks>
					</div>
					<div>
						{!data && isValid ? <button onClick={addNewTask}>Add</button> : null}
						{data ? <button onClick={() => deleteTask(data.id)}>Delete</button> : null}
						<button onClick={closeModal}>Close</button>
					</div>
				</>
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
