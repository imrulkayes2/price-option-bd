
import React, { useState } from 'react';
import Link from '../Link/Link';
import { AiOutlineMenu, AiOutlineCloseSquare } from 'react-icons/ai';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { "id": 1, "name": "Home", "path": "/home" },
        { "id": 2, "name": "About", "path": "/about" },
        { "id": 3, "name": "Contact", "path": "/contact" },
        { "id": 4, "name": "Products", "path": "/products" },
        { "id": 5, "name": "Services", "path": "/services" }
    ];
    return (
        <nav className='bg-red-400 '>
            <div className='pl-4 md:hidden text-2xl' onClick={() => setOpen(!open)}>
                {
                    open === true ?
                        <AiOutlineCloseSquare></AiOutlineCloseSquare> :
                        <AiOutlineMenu></AiOutlineMenu>
                }

            </div>
            <ul className={`md:flex    duration-1000 absolute bg-yellow-200 px-6 ${open ? 'top-8' : '-top-60'} md:static `}>
                {
                    routes.map(route => <Link key={route.id} route={route} ></Link>)
                }
            </ul>
        </nav >
    );
};
export default Navbar;