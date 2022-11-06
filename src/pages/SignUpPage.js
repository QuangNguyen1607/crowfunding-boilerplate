import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Input } from "components/input";
import { Label } from "components/lable";
import LayoutAuthentication from "layouts/LayoutAuthentication";
import FormGroup from "components/common/FormGroup";
import Button from "components/buton/Button";
import Checkbox from "components/checkbox/Checkbox";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import IconEyeToggle from "components/icons/IconEyeToggle";
import useToggleValue from "hooks/useToggleValue";

const schema = yup.object().shape({
	name: yup.string().required("This field is required"),
	email: yup
		.string()
		.email("Invalid email address")
		.required("This field in required"),
	password: yup
		.string()
		.min(8, "Password must be 8 character")
		.required("This field is required"),
	termVeri: yup
		.bool()
		.oneOf([true], "You must be check term is required")
		.required("You must be check term is required"),
});
const SignUpPage = () => {
	const {
		handleSubmit,
		control,
		watch,
		formState: { isValid, isSubmitting, errors },
	} = useForm({
		mode: "onChange",
		resolver: yupResolver(schema),
	});
	const watchTerm = watch("termVeri", false);
	const handleSignUp = values => {
		if (!isValid) return;
		console.log(values);
	};
	const { value: showPassword, handleToggleValue: handleTogglePassword } =
		useToggleValue();
	return (
		<>
			<LayoutAuthentication heading="Sign Up">
				<p className="lg:text-sm text-xs text-text3 text-center mt-10px mb-6 lg:mb-8">
					Dont have an account ?{" "}
					<Link
						to="/sign-in"
						className="text-primary cursor-pointer underline font-medium"
					>
						Sign In
					</Link>
				</p>
				<button className="flex items-center w-full justify-center font-semibold text-base gap-x-2 border-strock-color py-3 border cursor-pointer select-none rounded-xl dark:border-dark-stroke">
					<svg
						width="25"
						height="24"
						viewBox="0 0 25 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M22.3055 10.0415L21.5 10.0415L21.5 10L12.5 10L12.5 14L18.1515 14C17.327 16.3285 15.1115 18 12.5 18C9.1865 18 6.5 15.3135 6.5 12C6.5 8.6865 9.1865 6 12.5 6C14.0295 6 15.421 6.577 16.4805 7.5195L19.309 4.691C17.523 3.0265 15.134 2 12.5 2C6.9775 2 2.5 6.4775 2.5 12C2.5 17.5225 6.9775 22 12.5 22C18.0225 22 22.5 17.5225 22.5 12C22.5 11.3295 22.431 10.675 22.3055 10.0415Z"
							fill="#FBC02D"
						/>
						<path
							d="M3.65332 7.3455L6.93882 9.755C7.82782 7.554 9.98082 6 12.5003 6C14.0298 6 15.4213 6.577 16.4808 7.5195L19.3093 4.691C17.5233 3.0265 15.1343 2 12.5003 2C8.65932 2 5.32832 4.1685 3.65332 7.3455Z"
							fill="#E53935"
						/>
						<path
							d="M12.5002 22C15.0832 22 17.4302 21.0115 19.2047 19.404L16.1097 16.785C15.1057 17.5455 13.8577 18 12.5002 18C9.89916 18 7.69066 16.3415 6.85866 14.027L3.59766 16.5395C5.25266 19.778 8.61366 22 12.5002 22Z"
							fill="#4CAF50"
						/>
						<path
							d="M22.3055 10.0415L22.2975 10L21.5 10L12.5 10L12.5 14L18.1515 14C17.7555 15.1185 17.036 16.083 16.108 16.7855C16.1085 16.785 16.109 16.785 16.1095 16.7845L19.2045 19.4035C18.9855 19.6025 22.5 17 22.5 12C22.5 11.3295 22.431 10.675 22.3055 10.0415Z"
							fill="#1565C0"
						/>
					</svg>
					<span className="text-text2 text-base dark:text-white">
						Sign up with google
					</span>
				</button>
				<button className="text-center w-full py-3 text-text2 text-sm hover:underline dark:text-white">
					Or sign up with email
				</button>
				<form onSubmit={handleSubmit(handleSignUp)}>
					<FormGroup>
						<Label htmlFor="name">Full name *</Label>
						<Input
							control={control}
							name="name"
							type="text"
							placeholder="Lê Quang Nguyên"
							error={errors.name?.message}
						></Input>
					</FormGroup>
					<FormGroup>
						<Label htmlFor="email">Email *</Label>
						<Input
							control={control}
							name="email"
							type="email"
							placeholder="lequangnguyen409@gmail.com"
							error={errors.email?.message}
						></Input>
					</FormGroup>
					<FormGroup>
						<Label htmlFor="password">Password *</Label>
						<Input
							control={control}
							name="password"
							type={`${showPassword ? "text" : "password"}`}
							placeholder="Create a password"
							error={errors.password?.message}
						>
							<IconEyeToggle
								onClick={handleTogglePassword}
							></IconEyeToggle>
						</Input>
					</FormGroup>
					{errors.termVeri?.message.length > 0 ? (
						<div className="text-sm text-error">
							{errors.termVeri?.message}
						</div>
					) : (
						""
					)}
					<div className="flex items-start gap-x-5 mb-5">
						<Checkbox
							control={control}
							checked={watchTerm}
							name="termVeri"
						></Checkbox>
						<p className="text-xs lg:text-sm text-text2 flex-1 flex-shrink-0 dark:text-text3">
							I agree to the{" "}
							<span className="text-secondary underline">
								Terms of Use
							</span>{" "}
							and have read and understand the{" "}
							<span className="text-secondary underline">
								Privacy policy
							</span>
							.
						</p>
					</div>

					<Button type="submit" className="w-full" kind='primary'>
						Create my account
					</Button>
				</form>
			</LayoutAuthentication>
		</>
	);
};
export default SignUpPage;
