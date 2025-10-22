import { useEffect, useState } from "react"
import Button from "../components/Button"
import api from "../axios/api"
import { toast } from "react-toastify"
import PriceInput from "../components/input/PriceInput"
import WarningModal from "../components/modal/WarningModal"
import AlertModal from "../components/modal/AlertModal"

const TopUp = ({onBalancePlus}) => {
    const [value, setValue] = useState()
    const [warningModal, setWarningModal] = useState(false)
    const [alertModal, setAlertModal] = useState(false)
    const [type, setType] = useState("")
    const [error, setError] = useState("")
    // useEffect(() => {
    //     console.log(value)
    // }, [value])

    const handleSubmit = () => {
        if (value < 10000) {
            setError("Nominal minimal 10.000")
            return
        } else if (value > 1000000){
            setError("Nominal maksimal 1.000.000")
            return
        }
        setError("")
        setWarningModal(true)
    }

    const handleTopup = async () => {
        try {
            const res = await api.post("/topup",
                { top_up_amount: value }
            )
            handleAlertModal("success")
            onBalancePlus(value)
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
            <div className="flex flex-col gap-10 px-24">
                <div>
                    <div>
                        Silahkan masukan
                    </div>
                    <div className="text-2xl font-bold">
                        Nominal Top up
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="w-2/3 flex flex-col gap-4">
                        <div>
                            <PriceInput
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                                error={error}
                            />
                        </div>
                        <div>
                            <Button disabled={value == 0 || !value ? true : false} children={"Top up"} onClick={handleSubmit} />
                        </div>
                    </div>
                    <div className="w-1/3 grid grid-cols-3 gap-2">
                        <Button tertiary children={"Rp10.000"} onClick={() => { setValue(10000) }} />
                        <Button tertiary children={"Rp20.000"} onClick={() => { setValue(20000) }} />
                        <Button tertiary children={"Rp50.000"} onClick={() => { setValue(50000) }} />
                        <Button tertiary children={"Rp100.000"} onClick={() => { setValue(100000) }} />
                        <Button tertiary children={"Rp250.000"} onClick={() => { setValue(250000) }} />
                        <Button tertiary children={"Rp500.000"} onClick={() => { setValue(500000) }} />
                    </div>
                </div>
            </div>

            <WarningModal
                open={warningModal}
                message={"Anda yakin untuk Top up sebesar"}
                amount={value}
                submitMessage={"Ya, lanjutkan Top up"}
                cancelMessage={"Batalkan"}
                onSubmit={() => {
                    handleTopup()
                    setWarningModal(false)
                }}
                onCancel={() => setWarningModal(false)}
            />

            <AlertModal
                open={alertModal}
                type={type}
                message={"Top up sebesar"}
                amount={value}
                onClose={() => { setAlertModal(false); setValue(0) }}
            />
        </>
    )
}

export default TopUp