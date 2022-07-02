import React from 'react';
import { useController } from 'react-hook-form';

const Checkbox = ({ checked = false, control, name, type = 'checkbox', ...rest }) => {
	const { field } = useController({
		control,
		name,
		defaultValue: false,
	});
	const childCheck = checked ? (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
		<rect x="0.5" y="0.5" width="19" height="19" rx="3.5" stroke="#B2B3BD" />
		<rect width="20" height="20" rx="4" fill="#1DC071" />
		<path d="M5 10.5L8.33333 14L15 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
	</svg>
	) : (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
		<rect x="0.5" y="0.5" width="19" height="19" rx="3.5" stroke="#B2B3BD" />
		</svg>)
	return (
		<label className='cursor-pointer'>
			<input onChange={()=>{}} type={type} checked={checked} className='hidden' {...field} {...rest} />
			{childCheck}
		</label>
	);
};

export default Checkbox;