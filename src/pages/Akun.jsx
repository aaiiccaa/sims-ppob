import avatar from "../assets/avatar.png"
import EmailInput from "../components/input/EmailInput"
import NameInput from "../components/input/NameInput"
import Button from "../components/Button"

const Akun = () => {
    return (
        <div className="w-full flex justify-center px-4 py-4">
            <div className="max-w-3xl w-full flex flex-col justify-center gap-6">

                <div className="flex flex-col items-center justify-center">
                    <img className="w-24" src={avatar} alt="" />
                    <div className="mt-2 text-xl font-semibold">Kristanto Wibowo</div>
                </div>

                <div className="text-sm">
                    <div>
                        <div className="mb-1 font-medium">Email</div>
                        <EmailInput />
                    </div>

                    <div>
                        <div className="mt-4 mb-1 font-medium">Nama Depan</div>
                        <NameInput />
                    </div>

                    <div>
                        <div className="mt-4 mb-1 font-medium">Nama Belakang</div>
                        <NameInput />
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <Button children={"Edit Profil"} />
                    <Button children={"Logout"} isSecondary />
                </div>
            </div>
        </div>

    )
}

export default Akun