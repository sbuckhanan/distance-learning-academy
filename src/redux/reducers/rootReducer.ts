import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';

const rootReducer = combineReducers({
	// reducer: importedReducer
	errors,
	user,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
