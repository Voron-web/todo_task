import { createContext, useContext, useState } from "react";

const TaskList = createContext();

const ListProvider = ({ children }) => {
	const [task, setTask] = useState([
		{
			id: 1759393995000,
			title: "Example task",
			description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, fuga.",
			createDate: 1759393995000,
			priority: "medium",
			status: "todo",
			subTasks: [
				{ title: "subTask1", enable: true },
				{ title: "subTask2", enable: true },
			],
		},
	]);

	const [setting, setSetting] = useState({
		listItem: {
			showDescription: true,
			showStatus: true,
			showSubTask: true,
			showDate: true,
		},
	});

	const addTask = (elem) => {
		setTask([...task, elem]);
	};

	const removeTask = (id) => {
		setTask((prev) =>
			prev.filter((item) => {
				return item.id !== id;
			})
		);
	};

	const changeTask = (task) => {
		setTask((prev) =>
			prev.map((item) => {
				if (item.id == task.id) {
					return task;
				}
				return item;
			})
		);
	};

	return <TaskList.Provider value={{ task, setting, addTask, changeTask, removeTask }}>{children}</TaskList.Provider>;
};

export default ListProvider;

export const useTask = () => {
	return useContext(TaskList);
};
