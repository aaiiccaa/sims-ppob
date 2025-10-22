import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center shadow-sm px-24 py-4">
            <div className="">
                <NavLink to="/">
                    <div className='flex gap-2 font-semibold text-sm justify-center items-center'>
                        <img src={logo} alt="Logo" className='w-4 h-4' />
                        SIMS PPOB
                    </div>
                </NavLink>
            </div>
            <ul className="flex gap-10 text-sm">
                <li><NavLink className={({ isActive }) => isActive ? 'text-red' : ''} to="/topup">Top up</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? 'text-red' : ''} to="/transactions">Transaction</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? 'text-red' : ''} to="/akun">Akun</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navbar;
