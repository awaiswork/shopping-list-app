import React from "react";
import { InputProps } from "../../types/ui";

type ExtendedInputProps = InputProps & {
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    autoFocus?: boolean;
};

const Input: React.FC<ExtendedInputProps> = ({
    value,
    onChange,
    placeholder = "",
    disabled = false,
    className = "",
    type = "text",
    min,
    step,
    onKeyDown,
    autoFocus
}) => {
    const baseClasses =
        "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent";

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
            onKeyDown={onKeyDown}
            placeholder={placeholder}
            disabled={disabled}
            className={combinedClasses}
            autoFocus={autoFocus}
            {...numberProps}
        />
    );
};

export default Input;
