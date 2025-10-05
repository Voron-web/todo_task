import { css } from "@emotion/react";

const ListPanel = ({ onNewTaskClick }) => {
	const style = {
		panel: css({}),
	};

	return (
		<div>
			<button onClick={() => onNewTaskClick()}>add new</button>
		</div>
	);
};

export default ListPanel;
