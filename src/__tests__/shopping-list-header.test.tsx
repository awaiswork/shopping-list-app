import { render, screen } from "@testing-library/react";
import ShoppingListHeader from "../components/shopping-list/shopping-list-header";

describe("ShoppingListHeader Component", () => {
    test("renders shopping list title", () => {
        render(<ShoppingListHeader />);

        const title = screen.getByText("Shopping List");
        expect(title).toBeInTheDocument();
    });

    test("renders header contains shopping list title and shopping cart image", () => {
        render(<ShoppingListHeader />);

        const title = screen.getByText("Shopping List");
        const cartImage = screen.getByAltText("Shopping Cart");

        expect(title).toBeInTheDocument();
        expect(cartImage).toBeInTheDocument();
    });
});
