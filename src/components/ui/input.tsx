import React from "react";
import { InputProps } from "../../types/ui";

const Input: React.FC<InputProps> = ({
    value,
    onChange,
    placeholder = "",
    disabled = false,
    className = "",
    type = "text"
}) => {
    const baseClasses = "w-full px-3 py-2 border border-gray-300 rounded-lg";

    const disabledClasses = disabled
        ? "bg-gray-100 cursor-not-allowed opacity-50"
        : "bg-white hover:border-gray-400";

    const combinedClasses = `${baseClasses} ${disabledClasses} ${className}`;

    return (
        <input
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            disabled={disabled}
            className={combinedClasses}
        />
    );
};

export default Input;
