import React from "react";

export interface BaseInputProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
}

interface TextInputProps extends BaseInputProps {
    type?: "text";
    maxLength?: number;
}

interface NumberInputProps extends BaseInputProps {
    type: "number";
    min?: number;
    step?: number;
    max?: number;
}

export type InputProps = TextInputProps | NumberInputProps;

type ExtendedInputProps = InputProps & {
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    autoFocus?: boolean;
};

const Input: React.FC<ExtendedInputProps> = (props) => {
    const {
        value,
        onChange,
        placeholder = "",
        disabled = false,
        className = "",
        type = "text",
        onKeyDown,
        autoFocus
    } = props;

    const isNumberInput = type === "number";
    const isTextInput = type === "text";

    const min = (isNumberInput && (props as NumberInputProps).min) || 1;
    const step = (isNumberInput && (props as NumberInputProps).step) || 1;
    const max = (isNumberInput && (props as NumberInputProps).max) || 999;
    const maxLength = isTextInput ? (props as TextInputProps).maxLength : undefined;

    const handleChange = (inputValue: string) => {
        if (isNumberInput) {
            if (inputValue === "") {
                onChange("1");
                return;
            }

            // Restrict negative values
            const numValue = parseFloat(inputValue);
            if (numValue > 0 && numValue <= max) {
                onChange(inputValue);
            }
        } else {
            onChange(inputValue);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (isNumberInput) {
            // Restrict typing minus sign
            if (e.key === "-" || e.key === "Minus") {
                e.preventDefault();
                return;
            }
        }
        onKeyDown?.(e);
    };
    const baseClasses =
        "w-full px-4 py-2 border border-slate-300 rounded-lg transition-all duration-200 focus:outline-none focus:border-pink-300 placeholder-slate-400";

    const disabledClasses = disabled
        ? "bg-slate-100 cursor-not-allowed opacity-50"
        : "bg-white hover:border-slate-400";

    const combinedClasses = `${baseClasses} ${disabledClasses} ${className}`;

    const numberProps = isNumberInput ? { min, max, step } : {};
    const textMaxLength = isTextInput ? maxLength || 50 : undefined;
    const textProps = isTextInput ? { maxLength: textMaxLength } : {};

    if (type === "text" && textMaxLength) {
        return (
            <div className="relative">
                <input
                    type={type}
                    value={value}
                    onChange={(e) => handleChange(e.target.value)}
                    onKeyDown={handleKeyDown}
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
            onChange={(e) => handleChange(e.target.value)}
            onKeyDown={handleKeyDown}
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
