const CustomSelect = ({ value, data = [], onChange }) => {
	return (
		<select value={value} onChange={(event) => onChange(event.target.value)}>
			{data.map((item, index) => {
				return (
					<option key={index} value={item.value}>
						{item.title}
					</option>
				);
			})}
		</select>
	);
};

export default CustomSelect;
