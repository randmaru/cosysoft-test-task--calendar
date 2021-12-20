import { Col, Table } from "react-bootstrap";
import { CalendarHeader } from "./CalendarHeader";
import { CalendarBody } from "./CalendarBody";
import { useState } from "react";

export function Calendar() {
	const dayArray = [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday",
		],
		monthsArray = [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December",
		];

	const [activeDate, setActiveDate] = useState(new Date());

	return (
		<Col className={"p-0 border border-secondary"} sm={8}>
			<Table style={{ height: "100%" }}>
				<CalendarHeader dayArray={dayArray} />
				<CalendarBody
					activeDate={activeDate}
					setActiveDate={setActiveDate}
					monthsArray={monthsArray}
				/>
			</Table>
		</Col>
	);
}
