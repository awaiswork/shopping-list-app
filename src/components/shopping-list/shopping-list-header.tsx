const ShoppingListHeader = () => {
    return (
        <div className="flex items-center gap-4 p-6 border-b border-gray-200">
            <img src="/trolley.png" alt="Shopping Cart" className="w-12 h-12 object-contain" />
            <h1 className="text-4xl font-bold text-gray-800">Shopping List</h1>
        </div>
    );
};

export default ShoppingListHeader;
