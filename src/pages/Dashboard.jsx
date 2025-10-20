import { useState } from "react"
import avatar from "../assets/avatar.png"
import bgSaldo from "../assets/bgSaldo.png"
import Menu from "../components/menu/Menu"
import BalanceCard from "../components/BalanceCard"
const Dashboard = () => {
    const [showBalance, setShowBalance] = useState(false)
    return (
        <div className="flex flex-col gap-6 py-8">
            <div className="flex justify-between px-24">
                <div className="flex flex-col py-2 gap-4">
                    <img className="w-14" src={avatar} alt="" />
                    <div>
                        <div className="text-lg">Selamat datang,</div>
                        <div className="font-bold text-2xl">Kristianto Wibowo</div>
                    </div>
                </div>
                <BalanceCard balance={50000000}/>

            </div>
            <div className="px-24">
                <Menu/>
            </div>
            <div className="pl-24 pr-0 bg-amber-300">
                Temukan promo menarik
            </div>
        </div>
    )
}

export default Dashboard