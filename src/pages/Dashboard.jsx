import { useEffect, useState } from "react"
import avatarDefault from "../assets/avatar.png"
import Menu from "../components/menu/Menu"
import BalanceCard from "../components/BalanceCard"
import api from "../axios/api"
import { toast } from "react-toastify"
import Banner from "../components/banner/Banner"
const Dashboard = () => {
    const [avatar, setAvatar] = useState()
    const [name, setName] = useState("")
    const [balance, setBalance] = useState()
    const imageUrl = import.meta.env.VITE_IMG_URL

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

    useEffect(() => {
        console.log(balance)
        console.log(name)
    }, [balance, name])

    return (
        <>
            {
                name ? (
                    <div className="flex flex-col gap-12 py-8">
                        <div className="flex justify-between px-24">
                            <div className="flex flex-col py-2 gap-4">
                                <img className="w-16" src={avatar == `${imageUrl}/null` ? avatarDefault : avatar} alt="" />
                                <div>
                                    <div className="text-lg">Selamat datang,</div>
                                    <div className="font-bold text-2xl">{name}</div>
                                </div>
                            </div>
                            <BalanceCard balance={balance} />

                        </div>
                        <div className="px-24">
                            <Menu />
                        </div>
                        <div className="pl-24 pr-0 overflow-x-auto whitespace-nowrap">
                            <Banner />
                        </div>
                    </div>
                ) : (
                    <div>loading</div>
                )
            }

        </>
    )
}

export default Dashboard