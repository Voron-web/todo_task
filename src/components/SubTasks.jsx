import { useEffect, useState } from "react";
import CustomCheckbox from "./ui/CustomCheckbox";

const SubTasks = ({ data, onChange }) => {
	const [currentData, setCurrentData] = useState(data);

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

	useEffect(() => onChange(currentData));
	return (
		<div>
			{currentData.length !== 0
				? currentData.map((item, index) => {
						return <CustomCheckbox id={index} key={index} data={item} title={item.title} onChange={changeData}></CustomCheckbox>;
				  })
				: null}
		</div>
	);
};

export default SubTasks;
