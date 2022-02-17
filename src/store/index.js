import { configureStore, createSlice } from '@reduxjs/toolkit';

const pages = { signIn: 'signIn', signUp: 'signUp' };
const initialState = {
	page: pages.signIn,
	passwordVisible: false,
	isAuth: false,
};

const pageSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {
		switchPage(state) {
			if (state.page === pages.signIn) state.page = pages.signUp;
			else state.page = pages.signIn;
		},
		login(state) {
			state.isAuth = true;
		},
		showPassword() {},
	},
});

const store = configureStore({ reducer: pageSlice.reducer });

export const pageActions = pageSlice.actions;
export default store;
