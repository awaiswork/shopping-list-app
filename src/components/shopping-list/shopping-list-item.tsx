import React from "react";
import { ShoppingItem } from "../../types/shopping-list";
import Button from "../ui/button";

interface ShoppingListItemProps {
    item: ShoppingItem;
    onRemove?: (id: string) => void;
}

const ShoppingListItem: React.FC<ShoppingListItemProps> = ({ item, onRemove }) => {
    return (
        <div className="flex items-center gap-4 py-3 border-b border-gray-200 last:border-b-0">
            <div className="flex-1 min-w-0">
                <div className="border border-dashed border-gray-300 rounded px-3 py-2 bg-gray-50">
                    <span className="text-gray-700">{item.name || "name"}</span>
                </div>
            </div>
            <div className="w-24">
                <div className="border border-dashed border-gray-300 rounded px-3 py-2 bg-gray-50 text-center">
                    <span className="text-gray-700">{item.amount || 0}</span>
                </div>
            </div>
            <Button
                variant="danger"
                size="sm"
                onClick={() => onRemove?.(item.id)}
                className="px-4 py-2"
            >
                Remove
            </Button>
        </div>
    );
};

export default ShoppingListItem;
