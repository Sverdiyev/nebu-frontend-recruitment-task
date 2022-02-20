import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
	username: '',
	email: '',
	password: '',
	users: [],
	loggedInUser: null,
	error: { text: '' },
};

const pageSlice = createSlice({
	name: 'page',
	initialState,
	reducers: {
		setUsername(state, { payload }) {
			state.inputsTouched = true;
			state.username = payload;
			state.error.text = '';
		},
		setPassword(state, { payload }) {
			state.inputsTouched = true;
			state.password = payload;
			state.error.text = '';
		},
		setEmail(state, { payload }) {
			state.inputsTouched = true;
			state.email = payload;
			state.error.text = '';
		},
		setButtonIsDisabled(state, { payload }) {
			state.buttonIsDisabled = payload;
		},
		pageReset(state) {
			state.passwordIsShown = false;
			state.password = '';
			state.username = '';
		},
		setUsers(state, { payload }) {
			state.users = payload;
		},
		login(state, { payload }) {
			state.loggedInUser = payload;
			state.username = '';
			state.password = '';
			state.email = '';
		},
		logout(state) {
			state.loggedInUser = null;
		},
		setError(state, { payload }) {
			state.error.text = payload;
		},
	},
});

const store = configureStore({ reducer: pageSlice.reducer });

export const pageActions = pageSlice.actions;
export default store;
