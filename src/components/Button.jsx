const Button = ({ type = "button", children, className, onClick, secondary, disabled = false, textOnly, tertiary }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`${secondary ? "text-red border border-red hover:bg-red-100": tertiary ? "text-gray-700 border border-gray-700 hover:bg-red-50" : textOnly ? "text-red" : "bg-red text-white  hover:bg-red-600"}  text-sm rounded-md px-auto py-3 w-full ${disabled ? "cursor-not-allowed" : "cursor-pointer"} transition-colors ${className || ""}`}
        >
            {children}
        </button>
    );
};

export default Button;