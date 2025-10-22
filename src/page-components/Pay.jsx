import { useState } from "react"
import Button from "../components/Button"
import PriceInput from "../components/input/PriceInput"
import AlertModal from "../components/modal/AlertModal"
import WarningModal from "../components/modal/WarningModal"
import { toast } from "react-toastify"
import api from "../axios/api"
import { ArrowLeft } from "lucide-react"

const Pay = ({ item, onBalanceMinus, onBack }) => {
    const [warningModal, setWarningModal] = useState(false)
    const [alertModal, setAlertModal] = useState(false)
    const [type, setType] = useState("")

    const handlePay = async () => {
        try {
            const res = await api.post("/transaction",
                { service_code: item.service_code }
            )
            handleAlertModal("success")
            onBalanceMinus(item.service_tariff)
        } catch (err) {
            toast.error(err.response.data.message)
            handleAlertModal("failed")
        }
    }

    function handleAlertModal(type) {
        setType(type)
        setAlertModal(true)
    }

    return (
        <>
            <div className="flex flex-col px-24 w-full gap-6">
                <div className="flex items-center gap-2 text-gray-600 cursor-pointer" onClick={onBack}>
                    <ArrowLeft />
                    Kembali
                </div>
                <div>
                    <div>
                        Pembayaran
                    </div>
                    <div className="flex gap-2 items-center font-semibold">
                        <img className="w-8" src={item.service_icon} alt="" />
                        {item.service_name}
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <PriceInput value={item.service_tariff} disabled />
                    <Button children={"Bayar"} onClick={() => setWarningModal(true)} />
                </div>
            </div>

            <WarningModal
                open={warningModal}
                message={`Beli ${item.service_name} senilai`}
                amount={item.service_tariff}
                submitMessage={"Ya, lanjutkan bayar"}
                cancelMessage={"Batalkan"}
                onSubmit={() => {
                    handlePay()
                    setWarningModal(false)
                }}
                onCancel={() => setWarningModal(false)}
            />

            <AlertModal
                open={alertModal}
                type={type}
                message={`Pembayaran ${item.service_name} senilai`}
                amount={item.service_tariff}
                onClose={() => { setAlertModal(false); onBack() }}
            />
        </>

    )
}

export default Pay