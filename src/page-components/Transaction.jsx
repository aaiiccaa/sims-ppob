import { useEffect, useRef, useState } from "react"
import TransactionItem from "../components/TransactionItem"
import api from "../axios/api"
import { toast } from "react-toastify"
import Button from "../components/Button"

const Transaction = () => {
    const [data, setData] = useState([])
    const [offset, setOffset] = useState(0)
    const [hasMore, setHasMore] = useState(true)
    const isFirstRender = useRef(true)

    const getTransactions = async (offset) => {
        try {
            const res = await api.get("/transaction/history", {
                params: {
                    limit: 5,
                    offset: offset
                }
            })
            if (res.data.data.records.length < 5) {
                setHasMore(false)
            }
            setData(prev => [...prev, ...res.data.data.records])
        } catch (err) {
            toast.error(err.response.data.message)
        }
    }

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false; 
            return; 
        }
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
                data.length > 0 ? (
                    <div className="flex flex-col">
                        {data.map((item, index) => {
                            return <TransactionItem data={item} key={index} />
                        })}
                        <Button children={"Show more"} textOnly className={"font-semibold"} onClick={handleShowMore} />
                    </div>
                ) : (
                    <p>Data transaksi tidak tersedia</p>
                )
            }
        </div>
    )
}

export default Transaction