import { useState } from "react"
import bgSaldo from "../assets/bgSaldo.png"

const BalanceCard = ({balance}) => {
    const [showBalance, setShowBalance] = useState(false);

    return (
        <div className="relative inline-block">
            <img src={bgSaldo} alt="gambar" className="w-full" />
            <div className="absolute top-6 left-6 text-white text-sm">
                Saldo anda
            </div>
            <div className="absolute flex gap-2 top-15 left-6 text-white text-3xl font-bold">
                <div>Rp</div>
                <div>
                    {showBalance ? balance : ("rahasia")}
                </div>
            </div>
            <div onClick={() => setShowBalance(!showBalance)} className="absolute bottom-7 left-6 text-white text-xs cursor-pointer">
                Lihat saldo
            </div>
        </div>
    )
}

export default BalanceCard