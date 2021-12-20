export function CalendarHeader(props) {
	const day = props.dayArray.map((nameDay, index) => (
		<th key={index}>{nameDay}</th>
	));

	return (
		<thead className={"text-center"}>
			<tr>{day}</tr>
		</thead>
	);
}
