import { Modal } from "react-bootstrap";

export function ModalViewEvent(props) {
	console.log(props.item)

	return (
		<Modal centered show={props.showView} onHide={props.onHide}>
				<Modal.Header closeButton>
					<Modal.Title>View event</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<h2 className="mb-3">
						{props.item.title}
					</h2>
					<p className={"mb-3text-muted"}>
						{props.item.date}
					</p>
					<p>
						{props.item.members}
					</p>
					<p>
						{props.item.description}
					</p>
				</Modal.Body>
		</Modal>
	);
}
