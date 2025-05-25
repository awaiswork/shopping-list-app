import React, { useState } from "react";
import AddNewProduct from "./add-new-product";
import { ShoppingItem } from "../../types/shopping-list";
import ShoppingListHeader from "./shopping-list-header";
import ShoppingListItems from "./shopping-list-items";

const ShoppingList: React.FC = () => {
    // States
    const [productItems, setProductItems] = useState<ShoppingItem[]>([
        { id: "1", name: "Product 1", amount: 100 },
        { id: "2", name: "Product 2", amount: 200 },
        { id: "3", name: "Product 3", amount: 300 }
    ]);

    // Functions
    const handleAddItem = (name: string, amount: number) => {
        const newItem: ShoppingItem = {
            id: Date.now().toString(),
            name,
            amount
        };
        setProductItems([...productItems, newItem]);
    };

    const handleRemoveItem = (id: string) => {
        setProductItems(productItems.filter((item) => item.id !== id));
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg border border-gray-200">
                {/* Header */}
                <ShoppingListHeader />

                {/* Shopping List Items */}
                <ShoppingListItems items={productItems} onRemove={handleRemoveItem} />

                {/* Add New Product Section */}
                <div className="p-6 pt-2">
                    <AddNewProduct onAdd={handleAddItem} />
                </div>
            </div>
        </div>
    );
};

export default ShoppingList;
