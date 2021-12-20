import { Badge, ListGroup } from "react-bootstrap";

export function EventList(props) {
	return (
		<>
			<h2 className="d-flex justify-content-between pt-4">
				Event list
				<Badge bg="secondary">{props.eventList.length}</Badge>
			</h2>
			<ListGroup
				className={"border border-secondary navbar-nav-scroll"}
				variant="flush"
			>
				{props.eventList.length !== 0 ? (
					props.eventList.map(props.callbackfn)
				) : (
					<p className={"text-muted text-center"}>List empty</p>
				)}
			</ListGroup>
		</>
	);
}
