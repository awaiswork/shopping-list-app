import React from "react";
import { ShoppingItem } from "../../types/shopping-list";
import ShoppingListItem from "./shopping-list-item";

interface ShoppingListItemsProps {
    items: ShoppingItem[];
    onRemove: (id: string) => void;
}

const ShoppingListItems: React.FC<ShoppingListItemsProps> = ({ items, onRemove }) => {
    return (
        <div className="p-6 pt-2">
            {/* Column Headers */}
            <div className="grid grid-cols-[1fr_auto_auto] gap-4 py-2 border-b-2 border-gray-300 mb-2">
                <div>
                    <span className="text-sm font-semibold text-gray-600 uppercase">Product</span>
                </div>
                <div className="w-24 text-center">
                    <span className="text-sm font-semibold text-gray-600 uppercase">Amount</span>
                </div>
                <div className="w-20 text-center">
                    <span className="text-sm font-semibold text-gray-600 uppercase">Action</span>
                </div>
            </div>

            {/* Shopping List Items */}
            <div className="space-y-0">
                {items.map((item) => (
                    <ShoppingListItem key={item.id} item={item} onRemove={onRemove} />
                ))}
            </div>
        </div>
    );
};

export default ShoppingListItems;
