export interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: "primary" | "secondary" | "danger" | "success";
    size?: "sm" | "md" | "lg";
    disabled?: boolean;
    className?: string;
}

export interface BaseInputProps {
    value: string;
    onChange: (value: string) => void;
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
