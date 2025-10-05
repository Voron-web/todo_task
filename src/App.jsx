import "./App.css";
import { useThemeSet } from "./context/ThemeProvider";
import { css } from "@emotion/react";
import { dark } from "./themes/themes";
import Header from "./components/Header";
import TaskWindow from "./components/TaskWindow";
import MainList from "./components/MainList";
import { useRef, useState } from "react";

function App() {
	const [isTaskOpen, setIsTaskOpen] = useState(false);
	const [isShowMenu, setIsShowMenu] = useState(false);
	const taskWindowData = useRef();
	const { theme } = useThemeSet();

	const style = {
		base: css({
			minWidth: "100vw",
			minHeight: "100vh",
			background: `${theme.bg}`,
			width: "100px",
			height: "100px",
		}),
		baseBlock: css({
			marginTop: "50px",
			display: "flex",
		}),
	};
	const toggleMenu = (data = null) => {
		if (!isTaskOpen) {
			taskWindowData.current = data;
			setIsTaskOpen(true);
			setIsShowMenu(true);
		} else {
			setIsShowMenu(false);
			setTimeout(() => {
				setIsTaskOpen(false);
				taskWindowData.current = null;
			}, 500);
		}
	};

	return (
		<div css={style.base}>
			<Header />
			<div className="wrapper">
				<div css={style.baseBlock}>
					<MainList onTaskClick={(data) => toggleMenu(data)}></MainList>
					{isTaskOpen ? <TaskWindow data={taskWindowData.current} isShow={isShowMenu} closeModal={() => toggleMenu()}></TaskWindow> : null}
				</div>
				<button onClick={toggleMenu}>Show</button>
			</div>
		</div>
	);
}

export default App;
