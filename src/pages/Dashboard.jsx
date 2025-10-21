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

const Dashboard = () => {
    const location = useLocation();
    console.log("location", location)

    const [avatar, setAvatar] = useState()
    const [name, setName] = useState("")
    const [balance, setBalance] = useState()

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
        getProfile();
        getBalance();
    }, [])

    return (
        <>
            {
                name ? (
                    <div className="flex flex-col gap-12 py-8">
                        <ProfileBalanceSection avatar={avatar} name={name} balance={balance} />

                        {
                            location.pathname === "/" && (
                                <>
                                    <div className="px-24">
                                        <Menu />
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
                            location.pathname === "/topup" && (
                                <TopUp/>
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