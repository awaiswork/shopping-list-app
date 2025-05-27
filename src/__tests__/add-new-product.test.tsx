import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddNewProduct from "../components/shopping-list/add-new-product";

describe("AddNewProduct Component", () => {
    const mockOnAdd = jest.fn();

    test("add button is disabled initially", () => {
        render(<AddNewProduct onAdd={mockOnAdd} />);

        const addButton = screen.getByRole("button", { name: "Add" });
        expect(addButton).toBeDisabled();
    });

    test("add button becomes enabled when both fields are filled", () => {
        render(<AddNewProduct onAdd={mockOnAdd} />);

        const productNameInput = screen.getByPlaceholderText("Product name");
        const amountInput = screen.getByPlaceholderText("Qty");
        const addButton = screen.getByRole("button", { name: "Add" });

        userEvent.type(productNameInput, "Milk");
        userEvent.type(amountInput, "2");

        expect(addButton).toBeEnabled();
    });

    test("does not call onAdd with missing product name", async () => {
        render(<AddNewProduct onAdd={mockOnAdd} />);

        const amountInput = screen.getByPlaceholderText("Qty");
        const addButton = screen.getByRole("button", { name: "Add" });

        userEvent.type(amountInput, "5");

        fireEvent.click(addButton);
        expect(mockOnAdd).toHaveBeenCalledTimes(0);
    });

    test("does not call onAdd with missing amount", async () => {
        render(<AddNewProduct onAdd={mockOnAdd} />);

        const productNameInput = screen.getByPlaceholderText("Product name");
        const addButton = screen.getByRole("button", { name: "Add" });

        userEvent.type(productNameInput, "Apples");

        fireEvent.click(addButton);
        expect(mockOnAdd).toHaveBeenCalledTimes(0);
    });
});
