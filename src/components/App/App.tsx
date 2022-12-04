import './App.css';
import { useEffect } from 'react';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from '../LoginPage/LoginPage';
import { UserState } from '../../types/types';
import { Dashboard } from '../Dashboard/Dashboard';
import RegisterForm from '../RegisterForm/RegisterForm';
import { NavBar } from '../Navbar/Navbar';

function App() {
	const dispatch = useDispatch();

	const user = useSelector((store: UserState) => store.user);

	useEffect(() => {
		dispatch({ type: 'FETCH_USER' });
	}, [dispatch]);

	return (
		<Router>
			<NavBar />
			<Route exact path='/'>
				{user.id ? (
					// If the user is already logged in,
					// redirect to the /user page
					<Redirect to='/dashboard' />
				) : (
					// Otherwise, show the login page
					<LoginForm />
				)}
			</Route>
			<Route exact path='/dashboard'>
				<Dashboard />
			</Route>
			<Route exact path='/register'>
				<RegisterForm />
			</Route>
		</Router>
	);
}

export default App;
