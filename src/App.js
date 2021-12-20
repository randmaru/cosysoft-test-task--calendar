import "./App.scss";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Calendar } from "./components/calendar/Calendar";
import { ControlPanel } from "./components/ControlPanel";
import { ModalEvent } from "./components/ModalEvent";
import {ModalViewEvent} from "./components/ModalViewEvent";

function App() {
	const [show, setShow] = useState(false);
	const [showView, setShowView] = useState(false);
	const [indexItem, setIndexItem] = useState(-1);

	const [item, setItem] = useState({
		title: "",
		date: "",
		members: [],
		description: "",
	});

	const handleClose = () => {
		setShow(false);
		setShowView(false);
		setItem({
			title: "",
			date: "",
			members: [],
			description: "",
		});
	};

	return (
		<>
			<ModalEvent
				indexItem={indexItem}
				setIndexItem={setIndexItem}
				item={item}
				setItem={setItem}
				show={show}
				onHide={handleClose}
			/>
			<ModalViewEvent
				item={item}
				showView={showView}
				onHide={handleClose}
			/>

			<Container fluid>
				<Row>
					<Calendar />
					<ControlPanel
						setIndexItem={setIndexItem}
						setItem={setItem}
						setShow={setShow}
						setShowView={setShowView}
					/>
				</Row>
			</Container>
		</>
	);
}

export default App;
