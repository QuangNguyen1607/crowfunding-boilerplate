import { useState } from "react";

export default function useToggleValue(initialValue = false) {
	const [value, setValue] = useState(initialValue);
	const handleToggleValue = () => {
		setValue(value => !value)
	}
	return {
		value,
		handleToggleValue
	}
}