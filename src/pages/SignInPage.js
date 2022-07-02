import React from 'react';
import { Link } from 'react-router-dom';
import LayoutAuthentication from '../layouts/LayoutAuthentication';

const SignInPage = () => {
	return (
		<LayoutAuthentication heading='Sign In'>
			<p className='lg:text-sm text-xs text-text3 text-center mt-10px mb-6 lg:mb-8 '>Dont have an account ?{" "}<Link to="/sign-up" className='text-primary cursor-pointer underline font-medium'>Sign Up</Link></p>
			<button className='flex items-center'></button>
		</LayoutAuthentication>
	);
};

export default SignInPage;