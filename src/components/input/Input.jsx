import React from 'react';
import PropTypes from "prop-types";
import { useController } from 'react-hook-form';

const Input = (props) => {
	const { control, name, type, error = "", placeholder } = props
	const { field } = useController({
		control,
		name,
		defaultValue: '',
	})
	return (
		<div className="relative">
			<input type={type} id={name} className={`text-text1 w-full border border-strock-color rounded-10px text-sm font-medium h-[52px] px-6 placeholder:text-text4 ${error.length > 0 ? 'border-error' : ''} `} {...field} {...props}
				placeholder={error.length > 0 ? '' : placeholder}
			/>
			{error.length > 0 ? (
				<span className='pointer-events-none text-sm font-medium text-error absolute top-1/2 -translate-y-1/2 right-6'>{error}</span>
			) : ''}
		</div>
	);
};
Input.propTypes = {
  // value: PropTypes.string
	control: PropTypes.any.isRequired,
	name: PropTypes.string,
	error: PropTypes.string,
	type: PropTypes.string,

};
export default Input;