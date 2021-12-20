import React from "react";
import { Button } from "react-bootstrap";

export function CalendarBody(props) {
	const activeDate = props.activeDate;
	const setActiveDate = props.setActiveDate;
	const monthsArray = props.monthsArray;

	function generateMatrix() {
		let year = activeDate.getFullYear(),
			month = activeDate.getMonth(),
			firstDay = new Date(year, month, 1).getDay(),
			daysInMonth = () => {
				if (isNaN(year) || isNaN(month)) {
					return NaN;
				}

				let modMonth = month % 12;
				year += (month - modMonth) / 12;

				return modMonth === 1
					? (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
						? 29
						: 28
					: 31 - ((modMonth % 7) % 2);
			},
			matrix = [],
			counter = 1;

		for (let row = 1; row < 7; row++) {
			matrix[row] = [];

			for (let col = 0; col < 7; col++) {
				matrix[row][col] = null;

				if (row === 1 && col >= firstDay) {
					matrix[row][col] = counter++;
				} else if (row > 1 && counter <= daysInMonth()) {
					matrix[row][col] = counter++;
				}
			}
		}
		return matrix;
	}

	function setActiveMonth(params) {
		let year = Number(activeDate.getFullYear()),
			month = Number(activeDate.getMonth()),
			day = Number(activeDate.getDate());

		switch (params) {
			case "next": {
				if (month === 11) {
					month = 0;
					year = year + 1;
				} else {
					month = month + 1;
				}
				break;
			}

			case "prev": {
				if (month === 0) {
					month = 11;
					year = year - 1;
				} else {
					month = month - 1;
				}
				break;
			}

			default: {
				throw new SyntaxError(
					"Enter one of the following parameters: 'prev' or ' next' "
				);
			}
		}

		let newActiveDate = new Date(year, month, day);
		setActiveDate(newActiveDate);
	}

	let rows = generateMatrix().map((row, rowIndex) => {
		let rowItems = row.map((item, colIndex) => {
			const checkToDay =
				item === activeDate.getDate() &&
				activeDate.getMonth() === Number(new Date().getMonth());
			return (
				<td
					className={"border text-end align-bottom"}
					style={{
						fontWeight: checkToDay ? "bold" : "normal",
						backgroundColor: checkToDay
							? "rgba(13,110,253,0.1)"
							: "transparent",
					}}
					key={rowIndex.toString() + colIndex.toString()}
				>
					{item === null ? (
						<p style={{ color: "transparent" }}>0</p>
					) : (
						item
					)}
				</td>
			);
		});

		return <tr key={rowIndex.toString()}>{rowItems}</tr>;
	});

	return (
		<tbody>
			{rows}
			<tr
				className={"text-center align-content-center"}
				style={{ height: "55px", borderTop: "2px solid #6c757d" }}
			>
				<td>
					<Button
						variant={"secondary"}
						onClick={() => setActiveMonth("prev")}
					>
						<strong> - </strong>
					</Button>
				</td>
				<td colSpan={5}>
					<strong>
						{monthsArray[activeDate.getMonth()]}&nbsp;
						{activeDate.getFullYear()}
					</strong>
				</td>
				<td>
					<Button
						variant={"secondary"}
						onClick={() => setActiveMonth("next")}
					>
						<strong> + </strong>
					</Button>
				</td>
			</tr>
		</tbody>
	);
}
