import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ErrorsState } from '../../types/types';

function LoginPage() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const errors = useSelector((store: ErrorsState) => store.errors);
	const dispatch = useDispatch();
	const history = useHistory();

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
			<div className='flex min- overflow-hidden'>
				<div className='flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24'>
					<div className='w-full max-w-xl mx-auto lg:w-96'>
						<div className='mt-8'>
							<div className='mt-6'>
								<form className='space-y-6' onSubmit={login}>
									{errors.loginMessage && (
										<h3 className='alert' role='alert'>
											{errors.loginMessage}
										</h3>
									)}
									<div>
										<label htmlFor='email' className='block text-sm font-medium text-neutral-600'>
											{' '}
											Username{' '}
										</label>
										<div className='mt-1'>
											<input
												id='email'
												name='email'
												type='email'
												auto-complete='email'
												required
												placeholder='Your Username'
												onChange={(event) => setUsername(event.target.value)}
												value={username}
												className='block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300'
											/>
										</div>
									</div>

									<div className='space-y-1'>
										<label
											htmlFor='password'
											className='block text-sm font-medium text-neutral-600'>
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
												onClick={() => history.push('/register')}
												href='#'
												className='font-medium text-blue-600 hover:text-blue-500'>
												{' '}
												Register for an account{' '}
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
				<div className='relative flex-1 hidden w-0 overflow-hidden lg:block'>
					<img
						className='absolute inset-0 object-cover w-full h-full'
						src='/assets/images/placeholders/rectangleWide.png'
						alt=''
					/>
				</div>
			</div>
		</section>
		// <div classNameName='border-2 w-2/5 h-80 mt-40 m-auto'>
		// 	<form classNameName='text-center items-center justify-center mt-14' onSubmit={login}>
		// 		<h1>Welcome back!</h1>
		// 		{errors.loginMessage && (
		// 			<h3 classNameName='alert' role='alert'>
		// 				{errors.loginMessage}
		// 			</h3>
		// 		)}
		// 		<div>
		// 			<label htmlFor='username'>
		// 				Username:
		// 				<input
		// 					classNameName='mt-2 ml-2 rounded'
		// 					type='text'
		// 					name='username'
		// 					required
		// 					value={username}
		// 					onChange={(event) => setUsername(event.target.value)}
		// 				/>
		// 			</label>
		// 		</div>
		// 		<div>
		// 			<label htmlFor='password'>
		// 				Password:
		// 				<input
		// 					classNameName='mt-2 ml-3 rounded'
		// 					type='password'
		// 					name='password'
		// 					required
		// 					value={password}
		// 					onChange={(event) => setPassword(event.target.value)}
		// 				/>
		// 			</label>
		// 		</div>
		// 		<div>
		// 			<button classNameName='border-2 w-16 h-12 mt-5' type='submit' name='submit' value='Log In'>
		// 				Log In
		// 			</button>
		// 		</div>
		// 	</form>
		// 	<h2
		// 		onClick={() => history.push('/register')}
		// 		classNameName='text-center mt-3 text-blue-600 underline cursor-pointer'>
		// 		Register htmlFor an account
		// 	</h2>
		// </div>
	);
}

export default LoginPage;
