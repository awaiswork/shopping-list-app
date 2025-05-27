import React from "react";
import { ShoppingCart } from "lucide-react";
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
        <div className="h-full flex flex-col bg-gradient-to-r from-slate-50/80 to-blue-50/40">
            {items.length > 0 ? (
                <>
                    <div className="px-6 py-2 pb-0">
                        <div className="grid grid-cols-[1fr_auto_auto] gap-6 px-4 py-2 pb-3 border-b border-slate-300/60">
                            <div>
                                <span className="text-sm font-bold text-slate-600 tracking-wide">
                                    PRODUCT
                                </span>
                            </div>
                            <div className="w-24 text-center">
                                <span className="text-sm font-bold text-slate-600 tracking-wide">
                                    AMOUNT
                                </span>
                            </div>
                            <div className="text-center">
                                <span className="text-sm font-bold text-slate-600 tracking-wide">
                                    ACTIONS
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto px-6 py-4" ref={scrollContainerRef}>
                        <div className="space-y-2">
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
                            <div className="relative w-full h-full bg-pink-200 rounded-full flex items-center justify-center shadow-lg">
                                <ShoppingCart className="relative w-16 h-16 text-pink-600" />
                            </div>
                        </div>

                        <div className="max-w-md mx-auto">
                            <h3 className="text-2xl font-bold text-slate-800 mb-3">
                                Your shopping list is empty
                            </h3>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                Ready to start shopping? Add your first item below and build your
                                perfect shopping list!
                            </p>

                            <div className="inline-flex items-center px-4 py-2 bg-pink-50 border border-pink-200 rounded-full text-pink-700 shadow-md">
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
