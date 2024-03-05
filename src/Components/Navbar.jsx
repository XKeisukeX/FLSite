import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
export default function Navbar() {

    const [open, setOpen] = useState(false);

    return (
        <header className='bg-primary/5'>
            <nav className='max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center'>
                <div>
                    <a href="/">
                        <img src="https://supertokens.com/img/logos/capacitor-js.svg" className='h-10 w-10' alt="" />
                    </a>
                </div>
                <ul className='hidden md:flex items-center space-x-10'>
                    <li><a href="/" className='menu-item font-bold text-sm text-primary'>Home</a></li>
                    <li><a href="/Courses" className='menu-item font-bold text-sm text-primary'>Courses</a></li>
                    <li><a href="/About" className='menu-item font-bold text-sm text-primary'>About</a></li>
                    <li><a href="/Resources" className='menu-item font-bold text-sm text-primary'>Resources</a></li>
                </ul>
                <div className='md:flex hidden'>
                    <a href="#Contacts">
                        <button className='py-2 px-8 rounded bg-primary hover:bg-primary/20 hover:text-primary text-white font-bold text-sm ease-in duration-200'>Contacts</button>
                    </a>
                </div>
                <div className='md:hidden z-10' onClick={() => setOpen(!open)}>
                    {
                        open ? <XMarkIcon className='w-10 h-10 bg-primary/15 rounded text-primary py-1 px-1 cursor-pointer' /> : <Bars3BottomRightIcon className='w-10 h-10 bg-primary/15 rounded text-primary py-1 px-1 cursor-pointer' />
                    }
                </div>
                <ul className={open ? `absolute md:static md:w-auto w-full bg-primary/70 left-0 top-[11%] text-center ease-in duration-300 z-10 md:hidden` : `absolute md:static md:w-auto w-full bg-primary/5 left-[-1000px] top-[11%] text-center ease-in duration-300 z-10 md:hidden`}>
                    <li className='py-5'><a href="/" className='font-semibold text-base text-white'>Home</a></li>
                    <li className='py-5'><a href="/Courses" className='font-semibold text-base text-white'>Courses</a></li>
                    <li className='py-5'><a href="/About" className='font-semibold text-base text-white'>About</a></li>
                    <li className='py-5'><a href="/Resources" className='font-semibold text-base text-white'>Resources</a></li>
                    <li className='py-5'>
                        <a href="/Contacts">
                            <button className='py-2 w-4/5 m-auto rounded bg-white hover:bg-white/85 text-primary font-semibold text-base ease-in duration-200'>Contacts</button>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}