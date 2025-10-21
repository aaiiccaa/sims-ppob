import avatar from "../assets/avatar.png"
import EmailInput from "../components/input/EmailInput"
import NameInput from "../components/input/NameInput"
import Button from "../components/Button"
import { useDispatch } from "react-redux"
import { removeToken } from "../store/authSlice"
import { useEffect, useState } from "react"
import api from "../axios/api"
import { toast } from "react-toastify"

const Akun = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(removeToken());
    }

    const [data, setData] = useState()
    const [loading, setLoading] = useState(false)
    const [payload, setPayload] = useState({
        first_name: "",
        last_name: ""
    })

    const [isEditing, setIsEditing] = useState(false)

    const getProfile = async () => {
        try {
            setLoading(true)
            const res = await api.get("/profile")
            setData(res.data.data)
            setPayload({
                first_name: res.data.data.first_name,
                last_name: res.data.data.last_name
            })
        } catch (err) {
            toast.error(err.response.data.message)
        } finally {
            setLoading(true)
        }
    }

    const handleUpdateProfile = async () => {
        try {
            const res = await api.put("/profile/update", payload)
            console.log(res)
            setIsEditing(false)
            setData({
                ...data, last_name: payload.last_name, first_name: payload.first_name
            })
            toast.success("Berhasil update profile!")
        } catch (err) {
            toast.error(err.response.data.message)
        }
    }

    useEffect(() => {
        getProfile()
    }, [])

    return (
        <>
            {data ? (
                <div className="w-full flex justify-center px-4 py-4">
                    <div className="max-w-3xl w-full flex flex-col justify-center gap-6">

                        <div className="flex flex-col items-center justify-center">
                            <img className="w-24" src={avatar} alt="Avatar" />
                            <div className="mt-2 text-xl font-semibold">
                                {data.first_name} {data.last_name}
                            </div>
                        </div>

                        <div className="text-sm">
                            <div>
                                <div className="mb-1 font-medium">Email</div>
                                <EmailInput
                                    disabled
                                    placeholder="Email"
                                    value={data.email}
                                />
                            </div>

                            <div>
                                <div className="mt-4 mb-1 font-medium">Nama Depan</div>
                                <NameInput
                                    disabled={!isEditing}
                                    placeholder="Nama depan"
                                    value={payload.first_name}
                                    onChange={(e) => setPayload({
                                        ...payload, first_name: e.target.value
                                    })}
                                />
                            </div>

                            <div>
                                <div className="mt-4 mb-1 font-medium">Nama Belakang</div>
                                <NameInput
                                    disabled={!isEditing}
                                    placeholder="Nama belakang"
                                    value={payload.last_name}
                                    onChange={(e) => setPayload({
                                        ...payload, last_name: e.target.value
                                    })}
                                />
                            </div>
                        </div>
                        {
                            isEditing ? (
                                    <div className="flex flex-col gap-4">
                                        <Button children={"Simpan"} onClick={handleUpdateProfile} />
                                    </div>
                            ) : (
                                <div className="flex flex-col gap-4">
                                    <Button children={"Edit Profil"} onClick={() => { setIsEditing(true) }} />
                                    <Button children={"Logout"} secondary onClick={handleLogout} />
                                </div>
                            )
                        }
                    </div>
                </div>
            ) : (
                <div className="w-full flex justify-center items-center">
                    <p></p>
                </div>
            )}
        </>
    );

}

export default Akun