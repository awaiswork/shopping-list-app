import React, { useMemo, useState } from "react";
import Button from "../ui/button";
import Input from "../ui/input";
import { Plus } from "lucide-react";

interface AddNewProductProps {
    onAdd: (productName: string, productAmount: number) => void;
}

const AddNewProduct: React.FC<AddNewProductProps> = ({ onAdd }) => {
    // States
    const [productName, setProductName] = useState("");
    const [productAmount, setProductAmount] = useState<number | undefined>(undefined);

    // Memoized values
    const isAddDisabled = useMemo(
        () => !productName.trim() || !productAmount,
        [productName, productAmount]
    );

    const productAmountString = useMemo(
        () => (productAmount !== undefined ? productAmount.toString() : ""),
        [productAmount]
    );

    // Functions
    const handleAdd = () => {
        const trimmedName = productName.trim();
        if (onAdd && trimmedName && productAmount && productAmount > 0) {
            onAdd(trimmedName, productAmount);
            resetForm();
        }
    };

    const resetForm = () => {
        setProductName("");
        setProductAmount(undefined);
    };

    const handleAmountChange = (value: string) => {
        const numericValue = value === "" ? undefined : Number(value) || undefined;
        setProductAmount(numericValue);
    };

    return (
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 bg-gray-50">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b border-gray-300 pb-2">
                Add New Product
            </h3>
            <div className="flex items-center gap-4">
                <div className="flex-1">
                    <Input
                        value={productName}
                        onChange={setProductName}
                        placeholder="Name"
                        className="bg-white"
                    />
                </div>
                <div className="w-28">
                    <Input
                        value={productAmountString}
                        onChange={handleAmountChange}
                        placeholder="Amount"
                        type="number"
                        min={1}
                        step={1}
                        className="bg-white text-center"
                    />
                </div>
                <Button
                    variant="success"
                    size="sm"
                    onClick={handleAdd}
                    className="py-2"
                    disabled={isAddDisabled}
                >
                    <Plus className="w-4 h-4" />
                    Add
                </Button>
            </div>
        </div>
    );
};

export default AddNewProduct;
