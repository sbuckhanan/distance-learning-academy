export function ClassesList() {
	return (
		<>
			{/* Remove className [ h-64 ] when adding a card block */}
			<div className='container mx-auto px-6 mt-10'>
				{/* Remove className [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
				<div className='w-full h-full rounded'>
					<button className='bg-blue-500 w-20 h-10 mb-5 rounded'>Add Class</button>
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
								<tr className='bg-white border-b dark:bg-gray-800 text-center dark:border-gray-700'>
									<th
										scope='row'
										className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
										1st Period Science
									</th>
									<td className='py-4 px-6'>Mr. Beehler</td>
									<td className='py-4 px-6'>Science</td>
									<td className='py-4 px-6'>25/30</td>
									<td className='py-4 px-6'>
										<a
											href='#'
											className='font-medium text-blue-600 dark:text-blue-500 hover:underline'>
											Edit
										</a>
									</td>
								</tr>
								<tr className='bg-white border-b dark:bg-gray-800 text-center dark:border-gray-700'>
									<th
										scope='row'
										className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
										2nd Period Phy Ed
									</th>
									<td className='py-4 px-6'>Mr. Beehler</td>
									<td className='py-4 px-6'>Phy Ed</td>
									<td className='py-4 px-6'>30/30</td>
									<td className='py-4 px-6'>
										<a
											href='#'
											className='font-medium text-blue-600 dark:text-blue-500 hover:underline'>
											Edit
										</a>
									</td>
								</tr>
								<tr className='bg-white text-center dark:bg-gray-800'>
									<th
										scope='row'
										className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
										3rd Period Health
									</th>
									<td className='py-4 px-6'>Mr. Beehler</td>
									<td className='py-4 px-6'>Health</td>
									<td className='py-4 px-6'>28/30</td>
									<td className='py-4 px-6'>
										<a
											href='#'
											className='font-medium text-blue-600 dark:text-blue-500 hover:underline'>
											Edit
										</a>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</>
	);
}
