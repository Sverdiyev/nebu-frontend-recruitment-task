import { configureStore, createSlice } from '@reduxjs/toolkit';

// to add: logged in User, followed users,

const initialState = {
	isAuth: false,
	username: '',
	email: '',
	password: '',
	passwordIsShown: false,
	inputsTouched: false,
	buttonIsDisabled: false,
};

const pageSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {
		login(state) {
			state.isAuth = true;
		},
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
	},
});

const store = configureStore({ reducer: pageSlice.reducer });

export const pageActions = pageSlice.actions;
export default store;
