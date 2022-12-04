import './App.css';
import React, { useEffect } from 'react';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from '../LoginPage/LoginPage';
import { UserState } from '../../types/types';
import { HomePage } from '../HomePage/HomePage';
import RegisterForm from '../RegisterForm/RegisterForm';
import NavBar from '../Navbar/Navbar';

function App() {
	const dispatch = useDispatch();

	const user = useSelector((store: UserState) => store.user);

	useEffect(() => {
		dispatch({ type: 'FETCH_USER' });
	}, [dispatch]);

	return (
		<Router>
			{/* <NavBar /> */}
			<Route exact path='/'>
				{user.id ? (
					// If the user is already logged in,
					// redirect to the /user page
					<Redirect to='/home' />
				) : (
					// Otherwise, show the login page
					<LoginForm />
				)}
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
