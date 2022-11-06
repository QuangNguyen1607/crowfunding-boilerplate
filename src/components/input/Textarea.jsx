import React from "react";
import { useController } from "react-hook-form";

const Textarea = props => {
	const { control, name, error, placeholder, children, ...rest } = props;
	const { field } = useController({
		control,
		name,
		defaultValue: "",
	});
	return (
		<textarea
			className="outline-none py-4 min-h-[141px] text-text1 w-full border border-strock-color rounded-10px text-sm font-medium h-[52px] px-6 placeholder:text-text4 dark:bg-transparent dark:text-white dark:focus:border-white transition-all dark:border-dark-stroke dark:placeholder:text-text2"
			placeholder={placeholder} {...field} {...rest}></textarea>
	);
};

export default Textarea;
