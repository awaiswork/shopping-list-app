import React from "react";
import { ButtonProps } from "../../types/ui";

interface ExtendedButtonProps extends Omit<ButtonProps, "variant"> {
    isIconOnly?: boolean;
    variant?: "primary" | "secondary" | "danger" | "success" | "edit" | "delete";
}

const Button: React.FC<ExtendedButtonProps> = ({
    children,
    onClick,
    variant = "primary",
    size = "md",
    disabled = false,
    className = "",
    isIconOnly = false
}) => {
    const baseClasses = "font-medium transition-colors duration-200";

    const variantClasses = {
        primary: "bg-blue-600 hover:bg-blue-700 text-white",
        secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800",
        danger: "bg-red-600 hover:bg-red-700 text-white",
        success: "bg-green-600 hover:bg-green-700 text-white",
        edit: "bg-blue-50 text-blue-600 hover:bg-blue-100 hover:text-blue-800",
        delete: "bg-red-50 text-red-600 hover:bg-red-100 hover:text-red-800"
    };

    const sizeClasses = isIconOnly
        ? {
              sm: "p-2",
              md: "p-2.5",
              lg: "p-3"
          }
        : {
              sm: "px-3 py-1.5 text-sm",
              md: "px-4 py-2 text-base",
              lg: "px-6 py-3 text-lg"
          };

    const shapeClasses = isIconOnly ? "rounded-full" : "rounded-lg";

    const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer";

    const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${shapeClasses} ${disabledClasses} ${className}`;

    return (
        <button className={combinedClasses} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;
