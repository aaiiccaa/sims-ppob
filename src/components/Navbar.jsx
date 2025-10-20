import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center shadow-sm px-24 py-4">
            <div className="">
                <Link to="/">
                    <div className='flex gap-2 font-semibold text-lg justify-center items-center'>
                        <img src={logo} alt="Logo" className='w-5 h-5' />
                        SIMS PPOB
                    </div>
                </Link>
            </div>
            <ul className="flex gap-10">
                <li><Link to="/topup">Top up</Link></li>
                <li><Link to="/transaction">Transaction</Link></li>
                <li><Link to="/akun">Akun</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
