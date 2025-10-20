import game from "../../assets/menu/game.png"
import kurban from "../../assets/menu/kurban.png"
import listrik from "../../assets/menu/listrik.png"
import makan from "../../assets/menu/makan.png"
import musik from "../../assets/menu/musik.png"
import paket from "../../assets/menu/paket.png"
import pbb from "../../assets/menu/pbb.png"
import pdam from "../../assets/menu/pdam.png"
import pgn from "../../assets/menu/pgn.png"
import pulsa from "../../assets/menu/pulsa.png"
import tv from "../../assets/menu/tv.png"
import zakat from "../../assets/menu/zakat.png"

const data = [
    {
        name: "PBB",
        icon: game
    },
    {
        name: "Listrik",
        icon: listrik
    },
    {
        name: "Pulsa",
        icon: pulsa
    },
    {
        name: "PDAM",
        icon: pdam
    },
    {
        name: "PGN",
        icon: pgn
    },
    {
        name: "TV Langganan",
        icon: tv
    },
    {
        name: "Musik",
        icon: musik
    },
    {
        name: "Voucher Game",
        icon: game
    },
    {
        name: "Voucher Makanan",
        icon: makan
    },
    {
        name: "Kurban",
        icon: kurban
    },
    {
        name: "Zakat",
        icon: zakat
    },
    {
        name: "Paket Data",
        icon: paket
    },
]

const Menu = () => {
    return (
        <div className="flex justify-between">
            {data.map((item) => (
                <div className="flex flex-col items-center gap-2 w-20">
                    <img className="w-16 rounded-md" src={item.icon} alt={item.name} />
                    <div className="text-xs text-center w-full">
                        <span className="block leading-tight break-words">{item.name}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Menu