import { useEffect, useState } from "react"
import api from "../axios/api"
import { toast } from "react-toastify"

const Banner = () => {

    const [data, setData] = useState()

    const getBanner = async () => {
        try {
            const res = await api.get("/banner")
            setData(res.data.data)
        } catch (err) {
            toast.error(err.response.data.message)
        }
    }

    useEffect(() => {
        getBanner();
    }, [])

    return (
        <>
            {
                data ? (
                    <div className="flex gap-4 w-max">
                        {data.map((item, index) => (
                            <div className="flex flex-col items-center gap-2" key={index}>
                                <img className="rounded-md" src={item.banner_image} alt={item.description} />
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

export default Banner