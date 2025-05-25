import React from "react";
import { InputProps } from "../../types/ui";

const Input: React.FC<InputProps> = ({
    value,
    onChange,
    placeholder = "",
    disabled = false,
    className = "",
    type = "text",
    min,
    step
}) => {
    const baseClasses = "w-full px-3 py-2 border border-gray-300 rounded-lg";

    const disabledClasses = disabled
        ? "bg-gray-100 cursor-not-allowed opacity-50"
        : "bg-white hover:border-gray-400";

    const combinedClasses = `${baseClasses} ${disabledClasses} ${className}`;

    // Only include min and step props for number inputs
    const numberProps = type === "number" ? { min, step } : {};

    return (
        <input
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            disabled={disabled}
            className={combinedClasses}
            {...numberProps}
        />
    );
};

export default Input;
