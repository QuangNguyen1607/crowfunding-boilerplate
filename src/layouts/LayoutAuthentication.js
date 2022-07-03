import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import {withErrorBoundary} from 'react-error-boundary'
import ErrorComponent from '../components/common/ErrorComponent';

const LayoutAuthentication = ({ children, heading = 'This is title' }) => {

	return (
		<div className='w-full min-h-screen bg-lite-background dark:bg-dark-bg p-10 relative isolate'>
			<img src="/images/circle.png" alt="" className='pointer-events-none absolute bottom-0 right-0 w-full' />
			<div className="logo">
				<Link to='/' className='inline-block mb-5 lg:mb-16'>
					<img srcSet="/images/Logo.png 2x" alt="crowfunding-app" className='inline-block'/>
				</Link>
			</div>
			<div className="w-full max-w-[556px] rounded-10px shadow-xl p-12 mx-auto py-30px px:20px lg:px-60px lg:py-50px bg-white relative dark:bg-dark-secondary">
				<h1 className='text-center text-20px font-semibold text-text1 dark:text-white'>{heading}</h1>
				{children}
			</div>

		</div>
	);
};
LayoutAuthentication.propTypes = {
	heading: PropTypes.string,
	children: PropTypes.node
};
export default withErrorBoundary(LayoutAuthentication, {
	FallbackComponent: ErrorComponent,
});