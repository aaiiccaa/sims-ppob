import loginImage from '../../assets/login.png';
import logo from '../../assets/logo.png';
import Input from '../../components/input/Input';
import Button from '../../components/Button';
import EmailInput from '../../components/input/EmailInput';
import PasswordInput from '../../components/input/PasswordInput';
import { useState } from 'react';

const Login = () => {
    const [payload, setPayload] = useState({
        email: "",
        password: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
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
                    Masuk atau buat akun<br />untuk memulai
                </div>

                <div className="w-full flex justify-center">
                    <form className='flex flex-col gap-4 w-full px-16'>
                        <EmailInput value={payload.email} onChange={(e) => setPayload({ ...payload, email: e.target.value })} />
                        <PasswordInput value={payload.password} onChange={(e) => setPayload({ ...payload, password: e.target.value })} />
                        <Button onClick={handleSubmit} type="submit">Masuk</Button>
                    </form>
                </div>

                <div className='text-xs text-gray-600'>
                    Belum punya akun? registrasi <a className='text-red font-bold' href="/register">di sini</a>
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

export default Login;