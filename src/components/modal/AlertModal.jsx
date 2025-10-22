import { Check, X } from "lucide-react"
import Button from "../Button"

const AlertModal = ({ open, onClose, type, title, message, amount, closeMessage = "Tutup" }) => {
    if (!open) return
    console.log(type)
    return (
        <>
            <div className="absolute top-0 left-0 z-20 bg-black opacity-60 w-screen h-screen" />
            <div className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center">
                <div className="flex flex-col z-30 bg-white p-6 gap-4 rounded-lg shadow-lg w-1/3 opacity-100 items-center">
                    {
                        type === "success" ? (
                            <div className="bg-green-500 p-3 rounded-full">
                                <Check className="text-white" />
                            </div>
                        ) : (
                            <div className="bg-red p-3 rounded-full">
                                <X className="text-white" />
                            </div>
                        )
                    }
                    {title && <div className="font-semibold text-xl">{title}</div>}
                    <div className="flex flex-col items-center">
                        <div>{message}</div>
                        {
                            amount && (
                                <div className="font-bold text-lg">
                                    Rp{amount}
                                </div>
                            )
                        }
                        {
                            type === "success" ? (
                                <div>berhasil!</div>
                            ) : (
                                <div>gagal</div>
                            )
                        }
                    </div>
                    <div className="flex w-full gap-2">
                        <Button children={closeMessage} secondary className={"font-bold"} onClick={onClose} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AlertModal