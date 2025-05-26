import { fireEvent, render, screen } from "@testing-library/react";
import Input from "../components/ui/input";

describe("Input Component", () => {
    test("renders input with correct value", () => {
        render(<Input value="test" onChange={() => {}} />);
        const inputElement = screen.getByDisplayValue("test");
        expect(inputElement).toBeInTheDocument();
    });

    test("calls onChange when input value changes", () => {
        const onChange = jest.fn();
        render(<Input value="test" onChange={onChange} />);
        const inputElement = screen.getByDisplayValue("test");
        fireEvent.change(inputElement, { target: { value: "new test value" } });
        expect(onChange).toHaveBeenCalledWith("new test value");
    });

    test("renders with correct placeholder", () => {
        render(<Input value="test" placeholder="Enter test value" />);
        const inputElement = screen.getByPlaceholderText("Enter test value");
        expect(inputElement).toBeInTheDocument();
    });

    test("renders with correct type", () => {
        render(<Input value="123" type="number" />);
        const inputElement = screen.getByDisplayValue("123");
        expect(inputElement).toHaveAttribute("type", "number");
    });

    test("handles disabled state", () => {
        const onChange = jest.fn();
        render(<Input value="test" disabled onChange={onChange} />);
        const inputElement = screen.getByDisplayValue("test");
        expect(inputElement).toBeDisabled();
    });
});
