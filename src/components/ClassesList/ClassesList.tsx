import { useState } from 'react';

export function ClassesList() {
	const [modelOpen, setModelOpen] = useState(false);

	const toggleModel = () => {
		setModelOpen(!modelOpen);
	};

	return (
		<>
			{/* Remove className [ h-64 ] when adding a card block */}
			<div className='container mx-auto px-auto mt-10'>
				{/* Remove className [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
				<div className='w-full h-full rounded'>
					<button
						onClick={toggleModel}
						className='bg-indigo-600 w-24 h-10 mb-3 rounded hover:bg-indigo-500'>
						Create Class
					</button>
					<div className='overflow-x-auto relative shadow-md sm:rounded-lg'>
						<table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
							<thead className='text-xs text-center text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
								<tr>
									<th scope='col' className='py-3 px-6'>
										Class Name
									</th>
									<th scope='col' className='py-3 px-6'>
										Instructor
									</th>
									<th scope='col' className='py-3 px-6'>
										Subject
									</th>
									<th scope='col' className='py-3 px-6'>
										Number Of Students
									</th>
									<th scope='col' className='py-3 px-6'>
										Edit Class
									</th>
								</tr>
							</thead>
							<tbody>
								<tr className='bg-white border-b dark:bg-gray-800 text-center dark:border-gray-700 hover:bg-gray-900 cursor-pointer'>
									<th
										scope='row'
										className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
										1st Period Science
									</th>
									<td className='py-4 px-6'>Mr. Beehler</td>
									<td className='py-4 px-6'>Science</td>
									<td className='py-4 px-6'>25/30</td>
									<td className='py-4 px-6'>
										<span className='font-medium text-blue-600 dark:text-blue-500 hover:underline'>
											Edit
										</span>
									</td>
								</tr>
								<tr className='bg-white border-b dark:bg-gray-800 text-center dark:border-gray-700 hover:bg-gray-900 cursor-pointer'>
									<th
										scope='row'
										className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
										2nd Period Phy Ed
									</th>
									<td className='py-4 px-6'>Mr. Beehler</td>
									<td className='py-4 px-6'>Phy Ed</td>
									<td className='py-4 px-6'>30/30</td>
									<td className='py-4 px-6'>
										<span className='font-medium text-blue-600 dark:text-blue-500 hover:underline'>
											Edit
										</span>
									</td>
								</tr>
								<tr className='bg-white text-center dark:bg-gray-800 hover:bg-gray-900 cursor-pointer'>
									<th
										scope='row'
										className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
										3rd Period Health
									</th>
									<td className='py-4 px-6'>Mr. Beehler</td>
									<td className='py-4 px-6'>Health</td>
									<td className='py-4 px-6'>28/30</td>
									<td className='py-4 px-6'>
										<span className='font-medium text-blue-600 dark:text-blue-500 hover:underline'>
											Edit
										</span>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>

			{/* Create Class Modal */}
			<div
				className={
					modelOpen
						? 'py-12 mt-10 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0'
						: 'hidden'
				}
				id='modal'>
				<div role='alert' className='container mx-auto w-11/12 md:w-2/3 max-w-lg'>
					<div className='relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400'>
						<h1 className='text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4'>
							Create New Class
						</h1>
						<label
							htmlFor='name'
							className='text-gray-800 text-sm font-bold leading-tight tracking-normal'>
							Class Name
						</label>
						<input
							id='name'
							className='mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border'
							placeholder='3rd Period Gym'
						/>
						<label
							htmlFor='subject'
							className='text-gray-800 text-sm font-bold leading-tight tracking-normal'>
							Subject
						</label>
						<div className='relative mb-5 mt-2'>
							<input
								id='subject'
								className='text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border'
								placeholder='Math'
							/>
						</div>
						<label
							htmlFor='numberOfStudents'
							className='text-gray-800 text-sm font-bold leading-tight tracking-normal'>
							Maximum # of Students
						</label>
						<div className='relative mb-5 mt-2'>
							<input
								id='numberOfStudents'
								className='text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border'
								placeholder='0000'
							/>
						</div>
						<div className='flex items-center justify-start w-full'>
							<button className='focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm'>
								Submit
							</button>
							<button
								onClick={toggleModel}
								className='focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm'>
								Cancel
							</button>
						</div>
						<button
							onClick={toggleModel}
							className='cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600'
							aria-label='close modal'
							role='button'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='icon icon-tabler icon-tabler-x'
								width='20'
								height='20'
								viewBox='0 0 24 24'
								strokeWidth='2.5'
								stroke='currentColor'
								fill='none'
								strokeLinecap='round'
								strokeLinejoin='round'>
								<path stroke='none' d='M0 0h24v24H0z' />
								<line x1='18' y1='6' x2='6' y2='18' />
								<line x1='6' y1='6' x2='18' y2='18' />
							</svg>
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
