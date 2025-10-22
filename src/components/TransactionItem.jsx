import dateFormatter from "../fn/dateFormatter"

const TransactionItem = ({ data }) => {
    const color = data.transaction_type === "TOPUP" ? "text-green-500" : "text-red-500";

    function getTotal() {
        return data.transaction_type === "TOPUP" ? `+ Rp${data.total_amount}` : `- Rp${data.total_amount}`;
    }

    return (
        <div className="py-2">
            <div className="border border-gray-200 rounded-md px-4 py-2">
                <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                        <div className={`${color} font-semibold`}>
                            {getTotal()}
                        </div>
                        <div className="text-xs text-gray-400">
                            {dateFormatter(data.created_on)}
                        </div>
                    </div>

                    <div className="text-xs text-gray-800">
                        {data.description}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TransactionItem