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
          maxLength?: number;
      })
    | (BaseInputProps & {
          type: "number";
          min?: number;
          step?: number;
          maxLength?: never;
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
    maxLength,
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

    // Add maxLength for text inputs
    const textMaxLength = type === "text" ? maxLength || 50 : undefined;
    const textProps = type === "text" ? { maxLength: textMaxLength } : {};

    if (type === "text" && textMaxLength) {
        return (
            <div className="relative">
                <input
                    type={type}
                    value={value}
                    onChange={(e) => onChange?.(e.target.value)}
                    onKeyDown={onKeyDown}
                    placeholder={placeholder}
                    disabled={disabled}
                    className={`${combinedClasses} pr-16`}
                    autoFocus={autoFocus}
                    {...textProps}
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-slate-400">
                    {value.length}/{textMaxLength}
                </div>
            </div>
        );
    }

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
            {...textProps}
        />
    );
};

export default Input;
