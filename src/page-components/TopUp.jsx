import { useEffect, useState } from "react"
import Button from "../components/Button"
import Input from "../components/input/Input"
import ProfileBalanceSection from "./ProfileBalanceSection"
import api from "../axios/api"
import { toast } from "react-toastify"

const TopUp = () => {
    const [value, setValue] = useState()
    useEffect(() => {
        
    console.log(value)
    }, [value])

    const handleTopup = async () => {
        try {
            const res = await api.post("/topup",
                {top_up_amount : value}
            )
            toast.success("berhasil topup")
            setValue(0)
        } catch (err) {
            toast.error(err.response.data.message)
        }
    }
    
    return (
        <div className="flex flex-col gap-10 px-24">
            <div>
                <div>
                    silahkan masukan
                </div>
                <div className="text-2xl font-bold">
                    Nominal topup
                </div>
            </div>
            <div className="flex gap-4">
                <div className="w-2/3 flex flex-col gap-4">
                    <div>
                        <Input 
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        placeholder={"Masukkan nominal top up"}
                        />
                    </div>
                    <div>
                        <Button disabled={value == 0 || !value ? true : false} children={"Top up"} onClick={handleTopup}/>
                    </div>
                </div>
                <div className="w-1/3 grid grid-cols-3 gap-2">
                    <Button secondary children={"Rp10.000"} onClick={() => {setValue(10000)}}/>
                    <Button secondary children={"Rp20.000"} onClick={() => {setValue(20000)}}/>
                    <Button secondary children={"Rp50.000"} onClick={() => {setValue(50000)}}/>
                    <Button secondary children={"Rp100.000"} onClick={() => {setValue(100000)}}/>
                    <Button secondary children={"Rp250.000"} onClick={() => {setValue(250000)}}/>
                    <Button secondary children={"Rp500.000"} onClick={() => {setValue(500000)}}/>
                </div>
            </div>
        </div>
    )
}

export default TopUp