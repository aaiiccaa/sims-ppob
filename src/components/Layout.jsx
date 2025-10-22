import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
    return (
        <div className="h-screen flex flex-col">
            <div className="sticky top-0 z-10">
                <Navbar />
            </div>

            <main className="flex-1 overflow-y-auto">
                <Outlet /> 
            </main>
        </div>
    );
};

export default Layout;
