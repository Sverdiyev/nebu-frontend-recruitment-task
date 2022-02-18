import { configureStore, createSlice } from '@reduxjs/toolkit';

// to add: logged in User, followed users,

const initialState = {
	isAuth: false,
	username: '',
	email: '',
	password: '',
	inputsTouched: false,
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
			state.username = payload.username;
		},
		setPassword(state, { payload }) {
			state.inputsTouched = true;
			state.password = payload.password;
		},
		setEmail(state, { payload }) {
			state.inputsTouched = true;
			state.email = payload.email;
		},
	},
});

const store = configureStore({ reducer: pageSlice.reducer });

export const pageActions = pageSlice.actions;
export default store;
