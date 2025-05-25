import React, { useState } from "react";
import AddNewProduct from "./add-new-product";
import { ShoppingItem } from "../../types/shopping-list";
import ShoppingListHeader from "./shopping-list-header";

const ShoppingList: React.FC = () => {
    const [items, setItems] = useState<ShoppingItem[]>([
        { id: "1", name: "Product 1", amount: 100 },
        { id: "2", name: "Product 2", amount: 200 },
        { id: "3", name: "Product 3", amount: 300 }
    ]);

    const handleAddItem = (name: string, amount: number) => {
        const newItem: ShoppingItem = {
            id: Date.now().toString(),
            name,
            amount
        };
        setItems([...items, newItem]);
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg border border-gray-200">
                {/* Header */}
                <ShoppingListHeader />

                {/* Add New Product Section */}
                <div className="p-6 pt-2">
                    <AddNewProduct onAdd={handleAddItem} />
                </div>
            </div>
        </div>
    );
};

export default ShoppingList;
