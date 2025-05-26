import React from "react";

export interface BaseInputProps {
    value: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
}

export type InputProps =
    | (BaseInputProps & {
          type?: "text";
          min?: never;
          step?: never;
      })
    | (BaseInputProps & {
          type: "number";
          min?: number;
          step?: number;
      });

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
        "w-full px-4 py-2 border border-slate-300 rounded-lg transition-all duration-200 focus:outline-none focus:border-pink-300 placeholder-slate-400";

    const disabledClasses = disabled
        ? "bg-slate-100 cursor-not-allowed opacity-50"
        : "bg-white hover:border-slate-400";

    const combinedClasses = `${baseClasses} ${disabledClasses} ${className}`;

    // Only include min and step props for number inputs
    const numberProps = type === "number" ? { min, step } : {};

    return (
        <input
            type={type}
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
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
