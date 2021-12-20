const defaultState = {
	items: localStorage.getItem("items")
		? JSON.parse(localStorage.getItem("items"))
		: [],
};

export const calendarReducer = (state = defaultState, action) => {
	switch (action.type) {
		case "GET_CALENDAR":
			return state.items;

		case "POST_CALENDAR_EVENT":
			let postArray =
				localStorage.getItem("items") !== null
					? JSON.parse(localStorage.getItem("items"))
					: [];

			postArray.push(action.payload);
			localStorage.setItem("items", JSON.stringify(postArray));

			return { ...state, items: [...state.items, action.payload] };

		case "PUT_CALENDAR_EVENT":
			let putArray = [...state.items];

			putArray[action.payload.index] = action.payload.item;
			localStorage.setItem("items", JSON.stringify(putArray));

			return { ...state, items: putArray };

		case "DELETE_CALENDAR_EVENT":
			let removeArray = [...state.items];

			removeArray.splice(action.payload, 1);
			localStorage.setItem("items", JSON.stringify(removeArray));

			return { ...state, items: removeArray };

		case "DELETE_ALL_CALENDAR_EVENT":
			localStorage.removeItem("items");

			return { ...state, items: [] };

		default:
			return state;
	}
};
