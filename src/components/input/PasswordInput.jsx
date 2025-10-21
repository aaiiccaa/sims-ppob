import { useState } from "react";
import { Lock, Eye, EyeOff } from "lucide-react";

const PasswordInput = ({ placeholder = "Password", value, onChange, className, error, errorMessage }) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="relative w-full">
            <div className="relative w-full">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                    type={showPassword ? "text" : "password"}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className={`border  ${!error ? "border-gray-300 focus:ring-primary" : "border-red focus:ring-red"} text-sm rounded-md px-4 py-2 w-full pl-10 pr-10 focus:outline-none focus:ring-1 ${className || ""}`}
                />
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
            </div>
            {error && (
                <div className="text-right text-xs pt-2 text-red">
                    {errorMessage}
                </div>
            )}

        </div>
    );
};

export default PasswordInput;
