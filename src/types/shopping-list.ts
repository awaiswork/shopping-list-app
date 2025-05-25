export interface ShoppingItem {
    id: string;
    name: string;
    amount: number;
}

export interface AddNewProductProps {
    onAdd?: (productName: string, productAmount: number) => void;
}
