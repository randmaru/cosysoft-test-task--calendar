import { Button, ButtonGroup, Col, ListGroup } from "react-bootstrap";
import { EventList } from "./EventList";
import { useSelector, useDispatch } from "react-redux";

export function ControlPanel({ setIndexItem, setShow, setShowView, setItem }) {
	const handleShow = () => setShow(true);
	const handleShowView = (item) => {
		setShowView(true);
		setItem(item)
	}

	const eventList = useSelector((state) => state.calendar.items);

	const editItem = (item, index) => {
		setItem(item);
		setIndexItem(index);
		setShow(true);
	};

	const dispatch = useDispatch();

	const deleteItem = (index) => {
		dispatch({
			type: "DELETE_CALENDAR_EVENT",
			payload: index,
		});
	};

	const deleteAllItems = () => {
		dispatch({
			type: "DELETE_ALL_CALENDAR_EVENT",
		});
	};

	return (
		<Col className={"border border-primary p-3 vh-100"} sm={4}>
			<div className={"d-grid gap-3"}>
				<Button variant={"primary"} onClick={handleShow}>
					Create new event
				</Button>
				<Button variant={"danger"} onClick={() => deleteAllItems()}>
					Delete all events
				</Button>
			</div>
			<EventList
				eventList={eventList}
				callbackfn={(item, index) => (
					<ListGroup.Item
						className="d-flex justify-content-between align-items-center"
						key={index}
					>
						{item.title}
						<ButtonGroup size="sm">
							<Button
								variant="outline-success"
								onClick={() => handleShowView(item)}
							>
								View
							</Button>
							<Button
								variant="outline-primary"
								onClick={() => editItem(item, index)}
							>
								Edit
							</Button>
							<Button
								variant="outline-danger"
								onClick={() => deleteItem(index)}
							>
								Delete
							</Button>
						</ButtonGroup>
					</ListGroup.Item>
				)}
			/>
		</Col>
	);
}
