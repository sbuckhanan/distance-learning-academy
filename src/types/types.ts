export type User = {
	id: Number;
	username: String;
};

export type UserLogin = {
	username: String;
	password: String;
};

export interface UserState {
	user: User;
}

export interface SetUserAction {
	type: 'SET_USER';
	payload: User;
}

export interface UnsetUserAction {
	type: 'UNSET_USER';
}

export type Action = SetUserAction | UnsetUserAction;

export interface RegAction {
	type: 'REGISTER';
	payload: UserLogin;
}

export type RegistrationAction = RegAction;

// Errors Reducer Start
export interface ClearLoginAction {
	type: 'CLEAR_LOGIN_ERROR';
}

export interface LoginInputAction {
	type: 'LOGIN_INPUT_ERROR';
}

export interface LoginFailedAction {
	type: 'LOGIN_FAILED';
}

export interface LoginNoCodeAction {
	type: 'LOGIN_FAILED_NO_CODE';
}

export interface ClearRegAction {
	type: 'CLEAR_REGISTRATION_ERROR';
}

export interface RegInputAction {
	type: 'REGISTRATION_INPUT_ERROR';
}

export interface RegFailedAction {
	type: 'REGISTRATION_FAILED';
}

export type ErrorsAction =
	| ClearLoginAction
	| LoginInputAction
	| LoginFailedAction
	| LoginNoCodeAction
	| ClearRegAction
	| RegInputAction
	| RegFailedAction;
// Error Reducer End

export interface ErrorsState {
	errors: {
		loginMessage: String;
	};
}
