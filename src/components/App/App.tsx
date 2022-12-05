import './App.css';
import { useEffect } from 'react';
import { HashRouter as Router, Route, Navigate, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginPage from '../LoginPage/LoginPage';
import { UserState } from '../../types/types';
import { Dashboard } from '../Dashboard/Dashboard';
import RegisterForm from '../RegisterForm/RegisterForm';
import { NavBar } from '../Navbar/Navbar';
import { Gradebook } from '../Gradebook/Gradebook';
import { ClassesList } from '../ClassesList/ClassesList';

function App() {
	const dispatch = useDispatch();
	const user = useSelector((store: UserState) => store.user);

	useEffect(() => {
		dispatch({ type: 'FETCH_USER' });
	}, [dispatch]);

	return (
		<Router>
			<NavBar />
			<Routes>
				<Route path='/' element={user.id ? <Dashboard /> : <Navigate replace to={'/login'} />} />
				<Route path='/classlist' element={<ClassesList />} />
				<Route path='/gradebook' element={<Gradebook />} />
				<Route path='/login' element={!user.id ? <LoginPage /> : <Navigate replace to={'/'} />} />
				<Route
					path='/register'
					element={!user.id ? <RegisterForm /> : <Navigate replace to={'/'} />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
