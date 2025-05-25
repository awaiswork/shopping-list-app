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

    const handleEditItem = (id: string, name: string, amount: number) => {
        setProductItems(
            productItems.map((item) => (item.id === id ? { ...item, name, amount } : item))
        );
    };

    return (
        <div className="h-screen bg-gray-100 p-8 flex items-center justify-center">
            <div className="max-w-4xl w-full h-full max-h-[calc(100vh-4rem)] bg-white rounded-lg shadow-lg border border-gray-200 flex flex-col">
                {/* Header */}
                <ShoppingListHeader />

                {/* Shopping List Items */}
                <div className="flex-1 overflow-hidden">
                    <ShoppingListItems
                        items={productItems}
                        onRemove={handleRemoveItem}
                        onEdit={handleEditItem}
                    />
                </div>

                {/* Add New Product Section */}
                <div className="p-6 pt-2 border-t border-gray-200">
                    <AddNewProduct onAdd={handleAddItem} />
                </div>
            </div>
        </div>
    );
};

export default ShoppingList;
