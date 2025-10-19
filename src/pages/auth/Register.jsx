import loginImage from '../../assets/login.png';
import logo from '../../assets/logo.png';
import Input from '../../components/input/Input';
import Button from '../../components/Button';
import EmailInput from '../../components/input/EmailInput';
import PasswordInput from '../../components/input/PasswordInput';
import { useState } from 'react';
import NameInput from '../../components/input/NameInput';

const Register = () => {
    const [payload, setPayload] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: ""
    });

    const [confPassword, setConfPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        //error beda password taro di bawah field atau setelah submit?
        console.log("Logging in with:", payload);
    };

    return (
        <div className="flex h-screen">
            <div className="flex flex-col w-1/2 justify-center items-center gap-8">
                <div className='flex gap-2 font-semibold text-lg justify-center items-center'>
                    <img src={logo} alt="Logo" className='w-5 h-5' />
                    SIMS PPOB
                </div>
                <div className='font-bold text-2xl text-center text-primary'>
                    Lengkapi data untuk<br />membuat akun
                </div>

                <div className="w-full flex justify-center">
                    <form className='flex flex-col gap-4 w-full px-16'>
                        <NameInput
                            placeholder="First Name"
                            value={payload.first_name}
                            onChange={(e) => setPayload({ ...payload, first_name: e.target.value })}
                        />
                        <NameInput
                            placeholder="Last Name"
                            value={payload.last_name}
                            onChange={(e) => setPayload({
                                ...payload, last_name: e.target.value
                            })}
                        />
                        <EmailInput value={payload.email} onChange={(e) => setPayload({ ...payload, email: e.target.value })} />
                        <PasswordInput value={payload.password} onChange={(e) => setPayload({ ...payload, password: e.target.value })} />
                        <PasswordInput value={confPassword} onChange={(e) => setConfPassword(e.target.value)} />
                        <Button onClick={handleSubmit} type="submit">Registrasi</Button>
                    </form>
                </div>

                <div className='text-xs text-gray-600'>
                    Sudah punya akun? login <a className='text-red font-bold' href="/login">di sini</a>
                </div>

            </div>
            <div className='flex w-1/2 justify-center items-center'>
                <img
                    src={loginImage}
                    alt="login-image"
                    className="w-full h-full object-cover"
                />
            </div>

        </div>
    )
}

export default Register;