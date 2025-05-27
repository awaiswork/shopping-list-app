import React, { useRef, useEffect, useState } from "react";
import AddNewProduct from "./add-new-product";
import ShoppingListHeader from "./shopping-list-header";
import ShoppingListItems from "./shopping-list-items";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { addItem, removeItem, editItem } from "../../store/slices/shopping-list-slice";
import { ShoppingItem } from "../../types/shopping-list";

const ShoppingList: React.FC = () => {
    // Refs
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // State
    const [isAddNewProductAdded, setIsAddNewProductAdded] = useState(false);

    // Redux
    const dispatch = useAppDispatch();
    const productItems = useAppSelector((state) => state.shoppingList.items);

    // UseEffect to scroll to top when new item is added
    useEffect(() => {
        if (scrollContainerRef.current && isAddNewProductAdded) {
            scrollContainerRef.current.scrollTo({
                top: 0,
                behavior: "smooth"
            });
            setIsAddNewProductAdded(false);
        }
    }, [productItems.length, isAddNewProductAdded]);

    // Functions
    const handleAddItem = (name: string, amount: number) => {
        dispatch(addItem({ name, amount }));
        setIsAddNewProductAdded(true);
    };

    const handleRemoveItem = (id: string) => {
        dispatch(removeItem(id));
    };

    const handleEditItem = (productItemObj: ShoppingItem) => {
        dispatch(editItem(productItemObj));
    };

    return (
        <div className="h-screen bg-gray-100 p-8 flex items-center justify-center">
            <div className="max-w-4xl w-full h-full max-h-[calc(100vh-4rem)] bg-white rounded-lg shadow-lg border border-gray-200 flex flex-col">
                <ShoppingListHeader />

                <ShoppingListItems
                    items={productItems}
                    onRemove={handleRemoveItem}
                    onEdit={handleEditItem}
                    scrollContainerRef={scrollContainerRef}
                />

                <AddNewProduct onAdd={handleAddItem} />
            </div>
        </div>
    );
};

export default ShoppingList;
