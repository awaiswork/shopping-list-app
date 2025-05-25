import React, { useState } from "react";
import Button from "../ui/button";
import Input from "../ui/input";

interface AddNewProductProps {
    onAdd?: (name: string, amount: number) => void;
}

const AddNewProduct: React.FC<AddNewProductProps> = ({ onAdd }) => {
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");

    const handleAdd = () => {
        if (onAdd && name.trim() && amount.trim()) {
            const numericAmount = parseFloat(amount);
            if (!isNaN(numericAmount) && numericAmount > 0) {
                onAdd(name.trim(), numericAmount);
                setName("");
                setAmount("");
            }
        }
    };

    return (
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 bg-gray-50">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b border-gray-300 pb-2">
                Add New Products
            </h3>
            <div className="flex items-center gap-4">
                <div className="flex-1">
                    <Input
                        value={name}
                        onChange={setName}
                        placeholder="Name"
                        className="bg-white"
                    />
                </div>
                <div className="w-28">
                    <Input
                        value={amount}
                        onChange={setAmount}
                        placeholder="Amount"
                        type="number"
                        className="bg-white text-center"
                    />
                </div>
                <Button variant="success" size="sm" onClick={handleAdd} className="px-6 py-2">
                    Add
                </Button>
            </div>
        </div>
    );
};

export default AddNewProduct;
