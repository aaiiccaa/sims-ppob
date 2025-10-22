import { useEffect, useState } from "react"
import TransactionItem from "../components/TransactionItem"
import api from "../axios/api"
import { toast } from "react-toastify"
import Button from "../components/Button"

const Transaction = () => {
    const [data, setData] = useState()

    const getTransactions = async () => {
        try {
            const res = await api.get("/transaction/history")
            setData(res.data.data.records)
        } catch (err) {
            toast.error(err.response.data.message)
        }
    }

    useEffect(() => {
        getTransactions()
    }, [])

    useEffect(() => {
        console.log("data", data)
    }, [data])

    return (
        <div className="px-24">
            <div className="font-semibold">
                Semua transaksi
            </div>
            {
                data ? (
                <div className="flex flex-col gap-4">
                    <div className="">
                        {data.map((item, index) => {
                            return <TransactionItem data={item} key={index} />
                        })}
                    </div>
                    <Button children={"Show more"} textOnly className={"font-semibold"}/>
                </div>
                ) : (
                    <>hai</>
                )
            }
        </div>
    )
}

export default Transaction