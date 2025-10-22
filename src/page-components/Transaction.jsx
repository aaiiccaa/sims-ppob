import { useEffect, useState } from "react"
import TransactionItem from "../components/TransactionItem"
import api from "../axios/api"
import { toast } from "react-toastify"
import Button from "../components/Button"

const Transaction = () => {
    const [data, setData] = useState([])
    const [offset, setOffset] = useState(0)
    const [hasMore, setHasMore] = useState(true)

    const getTransactions = async (offset) => {
        try {
            const res = await api.get("/transaction/history", {
                params: {
                    limit: 5,
                    offset: offset
                }
            })
            if (res.data.data.records.length < 10){
                setHasMore(false)
            }
            setData(prev => [...prev, ...res.data.data.records])
        } catch (err) {
            toast.error(err.response.data.message)
        }
    }

    useEffect(() => {
        getTransactions(offset)
    }, [offset])

    const handleShowMore = () => {
        if (hasMore) {
            setOffset(offset + 5)
        } else {
            toast.error("Data transaksi sudah lengkap")
        }
    }

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
                        <Button children={"Show more"} textOnly className={"font-semibold"} onClick={handleShowMore}/>
                    </div>
                ) : (
                    <>hai</>
                )
            }
        </div>
    )
}

export default Transaction