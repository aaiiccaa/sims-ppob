import { Wallet } from "lucide-react"
import Button from "../Button"

const WarningModal = ({ open, onSubmit, onCancel, type, title, message, amount, submitMessage, cancelMessage }) => {
    if (!open) return
    return (
        <>
            <div className="absolute top-0 left-0 z-20 bg-black opacity-60 w-screen h-screen" />
            <div className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center">
                <div className="flex flex-col z-30 bg-white p-6 gap-4 rounded-lg shadow-lg w-1/3 opacity-100 items-center">
                    <div className="bg-red p-3 rounded-full">
                        <Wallet className="text-white" />
                    </div>
                    {title && <div className="font-semibold text-xl">{title}</div>}
                    <div className="flex flex-col items-center">
                        <div>{message}</div>
                        {
                            amount && (
                                <div className="font-bold text-lg">
                                    Rp{amount} ?
                                </div>
                            )
                        }
                    </div>
                    <div className="flex w-full gap-2">
                        <Button children={cancelMessage} secondary className={"text-gray-200"} onClick={onCancel}/>
                        <Button children={submitMessage} className={"font-bold"} onClick={onSubmit}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WarningModal