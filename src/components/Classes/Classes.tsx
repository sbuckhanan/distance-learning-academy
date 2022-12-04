export function Classes() {
	return (
		<>
			<div className='bg-gray-200 w-full'>
				<div className='container px-6 py-6 sm:py-0 mx-auto'>
					<div className='sm:hidden bg-white w-full relative'>
						<div className='absolute inset-0 m-auto mr-4 z-0 w-6 h-6'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='icon icon-tabler icon-tabler-selector'
								width={24}
								height={24}
								viewBox='0 0 24 24'
								strokeWidth='1.5'
								stroke='#A0AEC0'
								fill='none'
								strokeLinecap='round'
								strokeLinejoin='round'>
								<path stroke='none' d='M0 0h24v24H0z' />
								<polyline points='8 9 12 5 16 9' />
								<polyline points='16 15 12 19 8 15' />
							</svg>
						</div>
						{/* All Nav Items for mobile only */}
						<select
							aria-label='Selected tab'
							defaultValue='Dashboard'
							className='form-select block w-full p-3 border border-gray-300 rounded text-gray-600 appearance-none bg-transparent relative z-10'>
							<option className='text-sm text-gray-600'>Dashboard </option>
							<option className='text-sm text-gray-600'>Earnings </option>
							<option className='text-sm text-gray-600'>Forecasting </option>
							<option className='text-sm text-gray-600'>Reports </option>
						</select>
					</div>
					{/* These nav items are for desktop */}
					<ul className='hidden sm:flex flex-row pt-8'>
						<li className='rounded-t w-32 h-12 flex items-center justify-center bg-white text-sm text-gray-800'>
							Dashboard
						</li>
						<li className='rounded-t w-32 h-12 flex items-center justify-center bg-gray-300 mx-1 text-sm text-gray-800'>
							Earnings
						</li>
						<li className='rounded-t w-32 h-12 flex items-center justify-center bg-gray-300 mr-1 text-sm text-gray-800'>
							Forecasting
						</li>
						<li className='rounded-t w-32 h-12 flex items-center justify-center bg-gray-300 text-sm text-gray-800'>
							Reports
						</li>
					</ul>
				</div>
			</div>
			{/* Page title ends */}
			{/* Remove class [ h-64 ] when adding a card block */}
			<div className='container mx-auto px-6 mt-10 h-64'>
				{/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
				<div className='w-full h-full rounded border-dashed border-2 border-gray-300'>
					{/* Place your content here */}
				</div>
			</div>
		</>
	);
}
