import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";

export function ModalEvent(props) {
	const resetForm = () => {
		props.setItem({
			title: "",
			date: "",
			members: [],
			description: "",
		});
	};

	const dispatch = useDispatch();

	const pushItem = () => {
		dispatch({ type: "POST_CALENDAR_EVENT", payload: props.item });
		props.setItem({
			title: "",
			date: "",
			members: [],
			description: "",
		});
		props.setIndexItem(-1); // unset item index
		props.onHide(); // closed modal window
	};

	const putItem = () => {
		dispatch({
			type: "PUT_CALENDAR_EVENT",
			payload: {
				index: props.indexItem,
				item: props.item,
			},
		});
		props.setItem({
			title: "",
			date: "",
			members: [],
			description: "",
		});
		props.setIndexItem(-1); // unset item index
		props.onHide(); // closed modal window
	};

	return (
		<Modal centered show={props.show} onHide={props.onHide}>
			<Form>
				<Modal.Header closeButton>
					<Modal.Title>Create new event</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<Form.Group className="mb-3" controlId="formTitleEvent">
						<Form.Label>Title</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter event title"
							value={props.item.title}
							onChange={(element) =>
								props.setItem({
									...props.item,
									title: element.target.value,
								})
							}
						/>
					</Form.Group>

					<Form.Group className="mb-3" controlId="formDateEvent">
						<Form.Label>Date</Form.Label>
						<Form.Control
							type="date"
							value={props.item.date}
							onChange={(element) =>
								props.setItem({
									...props.item,
									date: element.target.value,
								})
							}
						/>
					</Form.Group>

					<Form.Group
						className="mb-3"
						controlId="formParticipantEvent"
					>
						<Form.Label>Participants</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter event participants"
							value={props.item.members}
							onChange={(element) =>
								props.setItem({
									...props.item,
									members: element.target.value,
								})
							}
						/>
					</Form.Group>

					<Form.Group
						className="mb-3"
						controlId="formDescriptionEvent"
					>
						<Form.Label>Description</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter event description"
							value={props.item.description}
							onChange={(element) =>
								props.setItem({
									...props.item,
									description: element.target.value,
								})
							}
						/>
					</Form.Group>
				</Modal.Body>

				<Modal.Footer>
					<Button
						variant="secondary"
						type="reset"
						onClick={resetForm}
					>
						Reset
					</Button>
					<Button
						variant="outline-primary"
						type="button"
						onClick={props.indexItem === -1 ? pushItem : putItem}
					>
						Submit
					</Button>
				</Modal.Footer>
			</Form>
		</Modal>
	);
}
