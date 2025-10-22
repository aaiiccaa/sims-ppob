import avatar from "../assets/avatar.png"
import EmailInput from "../components/input/EmailInput"
import NameInput from "../components/input/NameInput"
import Button from "../components/Button"
import { useDispatch } from "react-redux"
import { removeToken } from "../store/authSlice"
import { useEffect, useState } from "react"
import api from "../axios/api"
import { toast } from "react-toastify"
import { Pencil } from "lucide-react"

const Akun = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(removeToken());
    }

    const [data, setData] = useState()
    const [loading, setLoading] = useState(false)
    const [payload, setPayload] = useState({
        first_name: "",
        last_name: "",
        image: avatar
    });
    const [isEditing, setIsEditing] = useState(false)
    const [file, setFile] = useState(null)

    const getProfile = async () => {
        try {
            setLoading(true)
            const res = await api.get("/profile")
            setData(res.data.data)
            setPayload({
                first_name: res.data.data.first_name,
                last_name: res.data.data.last_name,
                image: res.data.data.image || avatar
            })
        } catch (err) {
            toast.error(err.response.data.message)
        } finally {
            setLoading(false)
        }
    }

    const handleUpdateProfile = async () => {
        try {
            const res = await api.put("/profile/update", payload)
            setIsEditing(false)
            setData({
                ...data,
                last_name: payload.last_name,
                first_name: payload.first_name
            })
            toast.success("Berhasil update profile!")
        } catch (err) {
            toast.error(err.response.data.message)
        }
    };

    const handleImageChange = (e) => {
        const selectedFile = e.target.files[0]
        if (selectedFile) {
            if (selectedFile.size > 100 * 1024) {
                toast.error("Ukuran gambar harus dibawah 100kb!")
                return;
            }
            const reader = new FileReader()
            reader.onloadend = () => {
                setFile(selectedFile)
                setPayload({
                    ...payload,
                    image: reader.result
                })
            }
            reader.readAsDataURL(selectedFile)
        }
    };

    const handleImageUpload = async () => {
        if (!file) return

        const formData = new FormData()
        formData.append("file", file)

        try {
            await api.put("/profile/image", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            toast.success("Profile image updated successfully!")
            setFile(null)
        } catch (err) {
            toast.error(err.response.data.message)
        }
    };

    useEffect(() => {
        getProfile()
    }, [])

    return (
        <>
            {data ? (
                <div className="w-full flex justify-center px-4 py-4">
                    <div className="max-w-3xl w-full flex flex-col justify-center gap-6">
                        <div className="flex flex-col items-center justify-center relative">
                            <div className="relative">
                                <img className="w-24 rounded-full" src={payload.image} alt="Avatar" />
                                <div
                                    className="absolute -bottom-1 -right-1 p-2 bg-white rounded-full shadow-lg cursor-pointer hover:bg-gray-300"
                                    onClick={() => document.getElementById("fileInput").click()}
                                >
                                    <Pencil className="text-gray-700 w-5 h-5" />
                                </div>
                            </div>

                            <div className="mt-4 text-xl font-semibold">
                                {data.first_name} {data.last_name}
                            </div>

                            <input
                                id="fileInput"
                                type="file"
                                className="hidden"
                                accept="image/*"
                                onChange={handleImageChange}
                            />
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

                        {isEditing ? (
                            <div className="flex flex-col gap-4">
                                <Button children={"Simpan"} onClick={handleUpdateProfile} />
                                {file && (
                                    <Button children={"Upload Image"} onClick={handleImageUpload} />
                                )}
                            </div>
                        ) : (
                            <div className="flex flex-col gap-4">
                                {file && (
                                    <Button children={"Upload Image"} onClick={handleImageUpload} />
                                )}
                                <Button children={"Edit Profil"} onClick={() => { setIsEditing(true) }} />
                                <Button children={"Logout"} secondary onClick={handleLogout} />
                            </div>
                        )}

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