const Button = ({ type = "button", children, className, onClick, secondary }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`${secondary ? "text-red border border-red hover:bg-red-100" : "bg-red text-white  hover:bg-red-600"}  text-sm rounded-md px-6 py-3 w-full cursor-pointer transition-colors ${className || ""}`}
        >
            {children}
        </button>
    );
};

export default Button;