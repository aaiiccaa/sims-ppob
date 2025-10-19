const Button = ({ type = "button", children, className, onClick }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`bg-red text-white text-sm rounded-md px-6 py-3 w-full hover:bg-red-800 cursor-pointer transition-colors ${className || ""}`}
        >
            {children}
        </button>
    );
};

export default Button;