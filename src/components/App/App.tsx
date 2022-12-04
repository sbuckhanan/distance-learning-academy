import './App.css';
import { useEffect } from 'react';
import { HashRouter as Router, Route, Navigate, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginPage from '../LoginPage/LoginPage';
import { UserState } from '../../types/types';
import { Dashboard } from '../Dashboard/Dashboard';
import RegisterForm from '../RegisterForm/RegisterForm';
import { NavBar } from '../Navbar/Navbar';

function App() {
	const dispatch = useDispatch();

	const user = useSelector((store: UserState) => store.user);

	useEffect(() => {
		dispatch({ type: 'FETCH_USER' });
	}, [user]);

	return (
		<Router>
			<NavBar />
			<Routes>
				<Route path='/' element={user.id ? <Dashboard /> : <Navigate replace to={'/login'} />} />
				<Route path='/login' element={<LoginPage />} />
				<Route path='/register' element={<RegisterForm />} />
			</Routes>
		</Router>
	);
}

export default App;
