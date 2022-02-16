import { configureStore, createSlice } from '@reduxjs/toolkit';

const pages = { signIn: 'signIn', signUp: 'signUp' };
const initialState = { page: pages.signIn };

const loginSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {
		switchToSignIn(state) {
			state.page = pages.signIn;
		},
		switchToSignUp(state) {
			state.page = pages.signUp;
		},
		login(state) {},
		showPassword() {},
	},
});

const store = configureStore({ reducer: loginSlice.reducer });

export const loginActions = loginSlice.actions;
export default store;
