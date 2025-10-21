import BalanceCard from "./BalanceCard"
import avatarDefault from "../assets/avatar.png"

const ProfileBalanceSection = ({avatar, name, balance}) => {

    const imageUrl = import.meta.env.VITE_IMG_URL

    return (
        <div className="flex justify-between px-24">
            <div className="flex flex-col py-2 gap-4">
                <img className="w-14" src={avatar == `${imageUrl}/null` ? avatarDefault : avatar} alt="" />
                <div>
                    <div className="text-lg">Selamat datang,</div>
                    <div className="font-bold text-2xl">{name}</div>
                </div>
            </div>
            <BalanceCard balance={balance} />
        </div>
    )
}

export default ProfileBalanceSection