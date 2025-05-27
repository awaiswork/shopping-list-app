import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ShoppingItem } from "../../types/shopping-list";

interface ShoppingListState {
    items: ShoppingItem[];
}

const initialState: ShoppingListState = {
    items: [
        { id: "1", name: "Bananas", amount: 6 },
        { id: "2", name: "Whole Milk", amount: 2 },
        { id: "3", name: "Xtra Bread", amount: 1 },
        { id: "4", name: "Eggs", amount: 12 },
        { id: "5", name: "Greek Yogurt", amount: 4 },
        { id: "6", name: "Fresh Spinach", amount: 2 },
        { id: "7", name: "Chicken Breast", amount: 3 },
        { id: "8", name: "Avocados", amount: 4 },
        { id: "9", name: "Tomatoes", amount: 1 },
        { id: "10", name: "Olive Oil", amount: 1 },
        { id: "11", name: "Pasta", amount: 2 },
        { id: "12", name: "Cheddar Cheese", amount: 1 }
    ]
};

const shoppingListSlice = createSlice({
    name: "shopping-list",
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<{ name: string; amount: number }>) => {
            const newItem: ShoppingItem = {
                id: Date.now().toString(),
                name: action.payload.name,
                amount: action.payload.amount
            };
            state.items = [newItem, ...state.items]; // Add new item to the beginning of the array
        },
        removeItem: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
        editItem: (state, action: PayloadAction<{ id: string; name: string; amount: number }>) => {
            const { id, name, amount } = action.payload;
            const itemIndex = state.items.findIndex((item) => item.id === id);
            if (itemIndex !== -1) {
                state.items[itemIndex] = { ...state.items[itemIndex], name, amount };
            }
        }
    }
});

export const { addItem, removeItem, editItem } = shoppingListSlice.actions;
export default shoppingListSlice.reducer;
