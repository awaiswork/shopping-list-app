import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../components/ui/button";

describe("Button Component", () => {
    test("renders button with children text", () => {
        render(<Button>Click Me</Button>);
        const buttonElement = screen.getByText("Click Me");
        expect(buttonElement).toBeInTheDocument();
    });

    test("calls onClick when clicked", () => {
        const onClick = jest.fn();
        render(<Button onClick={onClick}>Click Me</Button>);
        const buttonElement = screen.getByText("Click Me");
        fireEvent.click(buttonElement);
        expect(onClick).toHaveBeenCalledTimes(1);
    });

    test("renders with correct variant", () => {
        render(<Button variant="primary">Click Me</Button>);
        const buttonElement = screen.getByText("Click Me");
        expect(buttonElement).toHaveClass("bg-blue-600");
    });

    test("renders with correct size", () => {
        render(<Button size="sm">Click Me</Button>);
        const buttonElement = screen.getByText("Click Me");
        expect(buttonElement).toHaveClass("px-3 py-1.5 text-sm");
    });

    test("handles disabled state", () => {
        const onClick = jest.fn();
        render(
            <Button onClick={onClick} disabled>
                Click Me
            </Button>
        );
        const buttonElement = screen.getByText("Click Me");
        fireEvent.click(buttonElement);
        expect(onClick).toHaveBeenCalledTimes(0);
    });
});
