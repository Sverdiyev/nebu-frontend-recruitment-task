import { configureStore, createSlice, current } from '@reduxjs/toolkit';

// to add: logged in User, followed users,

const initialState = {
	username: '',
	email: '',
	password: '',
	passwordIsShown: false,
	inputsTouched: false,
	buttonIsDisabled: false,
	users: [],
	loggedInUser: null,
};

const pageSlice = createSlice({
	name: 'page',
	initialState,
	reducers: {
		setUsername(state, { payload }) {
			state.inputsTouched = true;
			state.username = payload;
		},
		setPassword(state, { payload }) {
			state.inputsTouched = true;
			state.password = payload;
		},
		setEmail(state, { payload }) {
			state.inputsTouched = true;
			state.email = payload;
		},
		setButtonIsDisabled(state, { payload }) {
			state.buttonIsDisabled = payload;
		},
		setPasswordIsShown(state, { payload }) {
			state.passwordIsShown = payload;
		},
		pageReset(state) {
			state.passwordIsShown = false;
			state.password = '';
			state.username = '';
		},
		setUsers(state, { payload }) {
			state.users = payload;
		},
		login(state) {
			for (let user of current(state.users)) {
				if (user.email === state.email && user.password === state.password) {
					console.log('logged in ');
					state.loggedInUser = user.id;
					state.username = '';
					state.password = '';
					state.email = '';
					return;
				}
			}
		},
	},
});

const store = configureStore({ reducer: pageSlice.reducer });

export const pageActions = pageSlice.actions;
export default store;
