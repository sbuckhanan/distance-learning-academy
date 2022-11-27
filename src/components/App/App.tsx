import './App.css';
import React, { useEffect } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from '../LoginPage/LoginPage';
// import { UserState } from '../../types/types';
import { HomePage } from '../HomePage/HomePage';
import RegisterForm from '../RegisterForm/RegisterForm';

function App() {
	const dispatch = useDispatch();

	// const user = useSelector((store: UserState) => store.user);

	useEffect(() => {
		dispatch({ type: 'FETCH_USER' });
	}, [dispatch]);

	return (
		<Router>
			<Route exact path='/'>
				<LoginForm />
			</Route>
			<Route exact path='/home'>
				<HomePage />
			</Route>
			<Route exact path='/register'>
				<RegisterForm />
			</Route>
		</Router>
	);
}

export default App;
