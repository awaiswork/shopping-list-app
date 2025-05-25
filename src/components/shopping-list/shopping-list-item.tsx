import React, { useState } from "react";
import { Edit, Check, Trash2 } from "lucide-react";
import { ShoppingItem } from "../../types/shopping-list";
import Button from "../ui/button";
import Input from "../ui/input";

interface ShoppingListItemProps {
    item: ShoppingItem;
    onRemove?: (id: string) => void;
    onEdit?: (id: string, name: string, amount: number) => void;
}

const ShoppingListItem: React.FC<ShoppingListItemProps> = ({ item, onRemove, onEdit }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editName, setEditName] = useState(item.name);
    const [editAmount, setEditAmount] = useState(item.amount);

    const handleSave = () => {
        if (onEdit && editName.trim()) {
            onEdit(item.id, editName.trim(), editAmount);
            setIsEditing(false);
        }
    };

    const handleCancel = () => {
        setEditName(item.name);
        setEditAmount(item.amount);
        setIsEditing(false);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            handleSave();
        } else if (e.key === "Escape") {
            handleCancel();
        }
    };

    const handleNameChange = (value: string) => {
        setEditName(value);
    };

    const handleAmountChange = (value: string) => {
        const numericValue = value === "" ? 0 : Number(value) || 0;
        setEditAmount(numericValue);
    };

    return (
        <div className="grid grid-cols-[1fr_auto_auto] gap-4 items-center py-3 border-b border-gray-200 last:border-b-0">
            <div>
                {isEditing ? (
                    <Input
                        value={editName}
                        onChange={handleNameChange}
                        onKeyDown={handleKeyPress}
                        autoFocus
                    />
                ) : (
                    <div className="border border-dashed border-gray-300 rounded px-3 py-2 bg-gray-50">
                        <span className="text-gray-700">{item.name || "name"}</span>
                    </div>
                )}
            </div>
            <div className="w-24">
                {isEditing ? (
                    <Input
                        type="number"
                        value={editAmount.toString()}
                        onChange={handleAmountChange}
                        onKeyDown={handleKeyPress}
                        className="text-center"
                        min={0}
                    />
                ) : (
                    <div className="border border-dashed border-gray-300 rounded px-3 py-2 bg-gray-50 text-center">
                        <span className="text-gray-700">{item.amount || 0}</span>
                    </div>
                )}
            </div>
            <div className="flex gap-2">
                {isEditing ? (
                    <Button onClick={handleSave} variant="success" size="sm" isIconOnly>
                        <Check className="w-4 h-4" />
                    </Button>
                ) : (
                    <Button onClick={() => setIsEditing(true)} variant="edit" size="sm" isIconOnly>
                        <Edit className="w-4 h-4" />
                    </Button>
                )}
                <Button onClick={() => onRemove?.(item.id)} variant="delete" size="sm" isIconOnly>
                    <Trash2 className="w-4 h-4" />
                </Button>
            </div>
        </div>
    );
};

export default ShoppingListItem;
