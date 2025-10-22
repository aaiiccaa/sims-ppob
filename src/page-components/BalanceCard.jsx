import { useState } from "react"
import bgSaldo from "../assets/bgSaldo.png"
import { Circle } from "lucide-react";

const BalanceCard = ({ balance }) => {
    const [showBalance, setShowBalance] = useState(false);

    return (
        <div className="relative inline-block">
            <img src={bgSaldo} alt="gambar" className="w-full" />
            <div className="absolute top-6 left-6 text-white text-sm">
                Saldo anda
            </div>
            <div className="absolute flex gap-2 top-15 left-6 text-white text-3xl font-bold items-center">
                <div>Rp</div>
                <div>
                    {showBalance ? balance : (
                        <div className="flex gap-1">
                            <Circle className="w-3" fill="white" />
                            <Circle className="w-3" fill="white" />
                            <Circle className="w-3" fill="white" />
                            <Circle className="w-3" fill="white" />
                            <Circle className="w-3" fill="white" />
                        </div>
                    )}
                </div>
            </div>
            <div onClick={() => setShowBalance(!showBalance)} className="absolute bottom-7 left-6 text-white text-xs cursor-pointer">
                {showBalance ? "Tutup saldo" : "Lihat saldo"}
            </div>
        </div>
    )
}

export default BalanceCard