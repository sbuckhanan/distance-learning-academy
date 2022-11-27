import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ErrorsState } from '../../types/types';
import { useHistory } from 'react-router-dom';

function RegisterForm() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const errors = useSelector((store: ErrorsState) => store.errors);
	const dispatch = useDispatch();
	const history = useHistory();

	const registerUser = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		dispatch({
			type: 'REGISTER',
			payload: {
				username: username,
				password: password,
			},
		});
	};

	return (
		<div className='border-2 w-2/5 h-80 mt-40 m-auto'>
			<form className='text-center items-center justify-center mt-14' onSubmit={registerUser}>
				<h1>Registration</h1>
				{errors.loginMessage && (
					<h3 className='alert' role='alert'>
						{errors.loginMessage}
					</h3>
				)}
				<div>
					<label htmlFor='username'>
						Username:
						<input
							className='mt-2 ml-2 rounded'
							type='text'
							name='username'
							required
							value={username}
							onChange={(event) => setUsername(event.target.value)}
						/>
					</label>
				</div>
				<div>
					<label htmlFor='password'>
						Password:
						<input
							className='mt-2 ml-3 rounded'
							type='password'
							name='password'
							required
							value={password}
							onChange={(event) => setPassword(event.target.value)}
						/>
					</label>
				</div>
				<div>
					<button className='border-2 w-20 h-12 mt-5' type='submit' name='submit' value='Log In'>
						Register
					</button>
				</div>
			</form>
			<h2
				onClick={() => history.push('/')}
				className='text-center mt-3 text-blue-600 underline cursor-pointer'>
				Already have an account?
			</h2>
		</div>
	);
}

export default RegisterForm;
