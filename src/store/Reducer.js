const initialState = {
	isLoading: true,
	token: null,
	user: null
};

const Reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'TOKEN_NOT_FOUND':
			return {
				...state,
				isLoading: false,
				token: null,
				user: null
			};
		case 'TOKEN_FOUND':
			return {
				...state,
				isLoading: false,
				token: action.payload.token
			};
		case 'SET_TOKEN':
			return {
				...state,
				isLoading: true,
				token: action.payload.token
			};
		case 'USER_FOUND':
			return {
				...state,
				isLoading: false,
				user: action.payload.user
			};
		case 'REMOVE_USER_TOKEN':
			return {
				...state,
				isLoading: true,
				token: null,
				user: null
			};
	}
	return state;
};

export default Reducer;
