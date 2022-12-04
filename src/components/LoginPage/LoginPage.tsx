import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ErrorsState } from '../../types/types';

function LoginPage() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const errors = useSelector((store: ErrorsState) => store.errors);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const login = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (username && password) {
			dispatch({
				type: 'LOGIN',
				payload: {
					username: username,
					password: password,
				},
			});
		} else {
			dispatch({ type: 'LOGIN_INPUT_ERROR' });
		}
	};

	return (
		<section>
			<div className='flex justify-center items-center min- overflow-hidden'>
				<div className='flex flex-col justify-center items-center flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24'>
					<div className='w-full max-w-xl mx-auto lg:w-96'>
						<div className='mt-8'>
							<div className='mt-6'>
								<form className='space-y-6' onSubmit={login}>
									{errors.loginMessage && (
										<h3 className='alert' role='alert'>
											{errors.loginMessage}
										</h3>
									)}
									<h1 className='text-white font-bold text-2xl'>Login</h1>
									<div>
										<label htmlFor='username' className='block text-sm font-medium text-white'>
											{' '}
											Username{' '}
										</label>
										<div className='mt-1'>
											<input
												name='username'
												type='text'
												required
												placeholder='Your Username'
												onChange={(event) => setUsername(event.target.value)}
												value={username}
												className='block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300'
											/>
										</div>
									</div>

									<div className='space-y-1'>
										<label htmlFor='password' className='block text-sm font-medium text-white'>
											{' '}
											Password{' '}
										</label>
										<div className='mt-1'>
											<input
												id='password'
												name='password'
												type='password'
												auto-complete='current-password'
												required
												placeholder='Your Password'
												className='block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300'
												value={password}
												onChange={(event) => setPassword(event.target.value)}
											/>
										</div>
									</div>

									<div className='flex items-center justify-between'>
										<div className='text-sm'>
											<a
												onClick={() => navigate('/register')}
												className='cursor-pointer font-medium text-blue-600 hover:text-blue-500'>
												Don't have account? Register Here.
											</a>
										</div>
									</div>

									<div>
										<button
											type='submit'
											className='flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'>
											Sign in
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default LoginPage;
