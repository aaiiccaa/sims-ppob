import { useEffect, useState } from "react"
import api from "../axios/api"
import { toast } from "react-toastify"

const Menu = ({onSelected}) => {

    const [menuData, setMenuData] = useState()

    const getMenu = async () => {
        try {
            const res = await api.get("/services")
            setMenuData(res.data.data)
        } catch (err) {
            toast.error(err.response.data.message)
        }
    }

    useEffect(() => {
        getMenu();
    }, [])

    const handleItemClick = (item) => {
        onSelected(item)
    }

    return (
        <>
            {
                menuData ? (
                    <div className="flex justify-between">
                        {menuData.map((item, index) => (
                            <div className="flex flex-col items-center gap-2 w-20 cursor-pointer" key={index} onClick={() => handleItemClick(item)}>
                                <img className="w-12 rounded-md" src={item.service_icon} alt={item.service_name} />
                                <div className="text-xs text-center w-full">
                                    <span className="block leading-tight break-words">{item.service_name}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div></div>
                )
            }
        </>
    )
}

export default Menu