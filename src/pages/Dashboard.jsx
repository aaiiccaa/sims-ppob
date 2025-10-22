import { useEffect, useState } from "react"
import avatarDefault from "../assets/avatar.png"
import Menu from "../page-components/Menu"
import BalanceCard from "../page-components/BalanceCard"
import api from "../axios/api"
import { toast } from "react-toastify"
import Banner from "../page-components/Banner"
import ProfileBalanceSection from "../page-components/ProfileBalanceSection"
import { useLocation } from "react-router-dom";
import TopUp from "../page-components/TopUp"
import Transaction from "../page-components/Transaction"
import Pay from "../page-components/Pay"

const Dashboard = () => {
    const location = useLocation();
    console.log("location", location)

    const [avatar, setAvatar] = useState()
    const [name, setName] = useState("")
    const [balance, setBalance] = useState()
    const [menuSelected, setMenuSelected] = useState()

    const getProfile = async () => {
        try {
            const res = await api.get("/profile")
            setName(res.data.data.first_name + " " + res.data.data.last_name)
            setAvatar(res.data.data.profile_image)
        } catch (err) {
            toast.error(err.response.data.message)
        }
    }

    const getBalance = async () => {
        try {
            const res = await api.get("/balance")
            setBalance(res.data.data.balance)
        } catch (err) {
            toast.error(err.response.data.message)
        }
    }

    useEffect(() => {
        setMenuSelected(null);
        getProfile();
        getBalance();
    }, [])

    const handleMenuSelected = (item) => {
        setMenuSelected(item)
    }

    const handleBalanceMinus = (price) => {
        setBalance(balance - price)
    }

    const handleBalancePlus = (price) => {
        setBalance(balance + price)
    }

    useEffect(() => {
        console.log("menu", menuSelected)
    }, [menuSelected])

    return (
        <>
            {
                name ? (
                    <div className="flex flex-col gap-8 py-8">
                        <ProfileBalanceSection avatar={avatar} name={name} balance={balance} />

                        {
                            location.pathname === "/" && !menuSelected && (
                                <>
                                    <div className="px-24">
                                        <Menu onSelected={handleMenuSelected} />
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <div className="px-24 text-sm font-semibold">
                                            Temukan promo menarik
                                        </div>
                                        <div className="pl-24 pr-0 overflow-x-auto whitespace-nowrap">
                                            <Banner />
                                        </div>
                                    </div>
                                </>
                            )
                        }
                        {
                            location.pathname === "/" && menuSelected && (
                                <Pay item={menuSelected} onBalanceMinus={handleBalanceMinus} onBack={() => setMenuSelected()}/>
                            )
                        }
                        {
                            location.pathname === "/topup" && (
                                <TopUp onBalancePlus={handleBalancePlus}/>
                            )
                        }
                        {
                            location.pathname === "/transactions" && (
                                <Transaction />
                            )
                        }
                    </div>
                ) : (
                    <div></div>
                )
            }

        </>
    )
}

export default Dashboard