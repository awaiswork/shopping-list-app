import React from "react";
import { Plus, ShoppingCart } from "lucide-react";
import { ShoppingItem } from "../../types/shopping-list";
import ShoppingListItem from "./shopping-list-item";

interface ShoppingListItemsProps {
    items: ShoppingItem[];
    onRemove: (id: string) => void;
    onEdit: (id: string, name: string, amount: number) => void;
    scrollContainerRef?: React.RefObject<HTMLDivElement | null>;
}

const ShoppingListItems: React.FC<ShoppingListItemsProps> = ({
    items,
    onRemove,
    onEdit,
    scrollContainerRef
}) => {
    return (
        <div className="h-full flex flex-col">
            {items.length > 0 ? (
                <>
                    <div className="px-6 py-2">
                        <div className="grid grid-cols-[1fr_auto_auto_auto] gap-4 py-2 pb-4 border-b border-gray-300 mb-2">
                            <div>
                                <span className="text-sm font-semibold text-gray-600">PRODUCT</span>
                            </div>
                            <div className="w-24 text-center">
                                <span className="text-sm font-semibold text-gray-600">AMOUNT</span>
                            </div>
                            <div className="text-center">
                                <span className="text-sm font-semibold text-gray-600">ACTIONS</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto px-6" ref={scrollContainerRef}>
                        <div className="space-y-0">
                            {items.map((item) => (
                                <ShoppingListItem
                                    key={item.id}
                                    item={item}
                                    onRemove={onRemove}
                                    onEdit={onEdit}
                                />
                            ))}
                        </div>
                    </div>
                </>
            ) : (
                <div className="flex-1 flex items-center justify-center px-6">
                    <div className="text-center">
                        <div className="relative mx-auto w-32 h-32 mb-8">
                            <div className="relative w-full h-full bg-gradient-to-br from-blue-100 to-indigo-200 rounded-full flex items-center justify-center shadow-lg">
                                <ShoppingCart className="w-16 h-16 text-indigo-500" />
                            </div>
                        </div>

                        <div className="max-w-md mx-auto">
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                Your shopping list is empty
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Ready to start shopping? Add your first item below and build your
                                perfect shopping list!
                            </p>

                            <div className="inline-flex items-center px-4 py-2 bg-indigo-50 border border-indigo-200 rounded-full text-indigo-700">
                                <Plus className="w-5 h-5 mr-2" />
                                <span className="font-medium">Add your first item below</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ShoppingListItems;
