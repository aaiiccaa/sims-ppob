import { Banknote } from "lucide-react";

const PriceInput = ({ placeholder = "Nominal", value, onChange, className }) => {
    return (
        <div className="relative w-full">
            <Banknote className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
                type="number"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`border border-gray-300 text-sm rounded-md px-4 py-2 w-full pl-10 focus:outline-none focus:ring-1 focus:ring-primary ${className || ""}`}
            />
        </div>
    );
};

export default PriceInput;
