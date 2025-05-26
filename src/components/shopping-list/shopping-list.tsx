import React, { useRef, useEffect } from "react";
import AddNewProduct from "./add-new-product";
import ShoppingListHeader from "./shopping-list-header";
import ShoppingListItems from "./shopping-list-items";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { addItem, removeItem, editItem } from "../../store/slices/shopping-list-slice";

const ShoppingList: React.FC = () => {
    // Refs
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // Redux
    const productItems = useAppSelector((state) => state.shoppingList.items);
    const dispatch = useAppDispatch();

    // Auto-scroll to bottom when new item is added
    useEffect(() => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    }, [productItems.length]);

    // Functions
    const handleAddItem = (name: string, amount: number) => {
        dispatch(addItem({ name, amount }));
    };

    const handleRemoveItem = (id: string) => {
        dispatch(removeItem(id));
    };

    const handleEditItem = (id: string, name: string, amount: number) => {
        dispatch(editItem({ id, name, amount }));
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
                <div className="p-6 border-t border-gray-200">
                    <AddNewProduct onAdd={handleAddItem} />
                </div>
            </div>
        </div>
    );
};

export default ShoppingList;
