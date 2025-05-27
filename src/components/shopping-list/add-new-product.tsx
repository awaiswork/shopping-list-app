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
        <div className="p-6 border-t border-gray-200">
            <div className="border-2 border-dashed border-pink-200 hover:border-pink-300 transition-colors duration-200 rounded-xl p-4">
                <h3 className="text-lg font-semibold text-slate-700 mb-4 border-b border-pink-200/60 pb-2 flex items-center gap-2">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span className="font-semibold text-pink-600 tracking-wide">
                        Add New Product
                    </span>
                </h3>
                <div className="flex items-center gap-4">
                    <div className="flex-1">
                        <Input
                            value={productName}
                            onChange={setProductName}
                            placeholder="Product name"
                            className="bg-white/70"
                            maxLength={50}
                        />
                    </div>
                    <div className="w-28">
                        <Input
                            value={productAmountString}
                            onChange={handleAmountChange}
                            placeholder="Qty"
                            type="number"
                            min={1}
                            step={1}
                            className="bg-white/70 text-center"
                        />
                    </div>
                    <Button
                        variant="success"
                        size="md"
                        onClick={handleAdd}
                        className="py-2"
                        disabled={isAddDisabled}
                    >
                        <Plus className="w-4 h-4" />
                        Add
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default AddNewProduct;
