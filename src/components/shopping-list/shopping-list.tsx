import React, { useState, useRef, useEffect } from "react";
import AddNewProduct from "./add-new-product";
import { ShoppingItem } from "../../types/shopping-list";
import ShoppingListHeader from "./shopping-list-header";
import ShoppingListItems from "./shopping-list-items";

const ShoppingList: React.FC = () => {
    // Refs
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // States
    const [productItems, setProductItems] = useState<ShoppingItem[]>([
        { id: "1", name: "Product 1", amount: 100 },
        { id: "2", name: "Product 2", amount: 200 },
        { id: "3", name: "Product 3", amount: 300 },
        { id: "4", name: "Product 4", amount: 100 },
        { id: "5", name: "Product 5", amount: 200 },
        { id: "6", name: "Product 6", amount: 300 },
        { id: "7", name: "Product 7", amount: 100 },
        { id: "8", name: "Product 8", amount: 200 },
        { id: "9", name: "Product 9", amount: 300 },
        { id: "10", name: "Product 10", amount: 100 },
        { id: "11", name: "Product 11", amount: 200 },
        { id: "12", name: "Product 12", amount: 300 },
        { id: "13", name: "Product 13", amount: 100 },
        { id: "14", name: "Product 14", amount: 200 },
        { id: "15", name: "Product 15", amount: 300 }
    ]);

    // Auto-scroll to bottom when new item is added
    useEffect(() => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo({
                top: scrollContainerRef.current.scrollHeight,
                behavior: "smooth"
            });
        }
    }, [productItems.length]);

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
                        scrollContainerRef={scrollContainerRef}
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
