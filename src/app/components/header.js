'use client'
import Image from 'next/image'
import logo from '../assets/logo/Logo.svg'
import style from '../style/header.module.css'
import { useLayoutEffect, useState } from 'react'
import ScrollToDiv from '@/utils/scrollIntoView'
export default function Header() {
    const [menuOn, setMenuOn] = useState(false);

    return (
        <div className={`${style.bg_header} fixed z-[999] w-full select-none`}>
            <div className='flex flex-row justify-between items-center h-24 max-w-[900px] m-auto px-2  gap-7'>
                <Image src={logo} alt='logo'/>
                <div className='md:flex hidden flex-row items-center  lg:gap-9 gap-5 '>
                    <button onClick={() => ScrollToDiv('accounts')} className={`bg-gradient-to-b from-[#F9CE34] to-[#f9ce348c] py-2 text-white font-bold px-3 rounded-lg hover:brightness-110 duration-300`}>Contas Disponíveis </button>
                    <h1 onClick={() => ScrollToDiv('depoimments')} className='text-white text-sm cursor-pointer'>Depoimentos</h1>
                    <h1 onClick={() => ScrollToDiv('about')} className='text-white text-sm cursor-pointer'>Sobre</h1>
                    <h1 onClick={() => ScrollToDiv('questions')} className='text-white text-sm cursor-pointer'>Perguntas frequentes</h1>
                    <h1 onClick={() => ScrollToDiv('contact')} className='text-white text-sm cursor-pointer'>Contato</h1>
                </div>
                <div onClick={() => setMenuOn(!menuOn)} className={`${menuOn ? 'translate-y-2' : 'translate-y-0'} duration-150 md:hidden flex flex-col gap-2`}>
                    <div className={`${menuOn ? '-rotate-45' : 'rotate-0'} duration-150 border-b-2 w-10 h-1 border-white`}></div>
                    <div className={`${menuOn ? 'hidden' : 'flex'} border-b-2 duration-150 w-10 h-1 border-white`}></div>
                    <div className={`${menuOn ? 'rotate-45 -translate-y-3' : 'rotate-0'} border-b-2 duration-150 w-10 h-1 border-white`}></div>
                </div>
            </div>
            {
                menuOn &&
                <div id='myMenu' className={`slide-in-blurred-top h-full md:hidden overflow-hidden rounded-b-xl duration-100 bg-gradient-to-b from-[#c7aa42]  via-[#b79002f0] to-[#191402eb]  w-full fixed`}>
                    <div className='flex  flex-col items-center lg:gap-9 gap-5 pt-20 '>
                        <button onClick={() => { ScrollToDiv('accounts'); setMenuOn(false) }} className={`bg-gradient-to-b from-[#F9CE34] to-[#f9ce348c] py-2 text-white font-bold px-3 rounded-lg hover:brightness-110 duration-300`}>Contas Disponíveis </button>
                        <h1 onClick={() => { ScrollToDiv('depoimments'); setMenuOn(false) }} className='text-white text-base font-bold cursor-pointer'>Depoimentos</h1>
                        <h1 onClick={() => { ScrollToDiv('about'); setMenuOn(false) }} className='text-white text-base font-bold cursor-pointer'>Sobre</h1>
                        <h1 onClick={() => { ScrollToDiv('questions'); setMenuOn(false) }} className='text-white text-base font-bold cursor-pointer'>Perguntas frequentes</h1>
                        <h1 onClick={() => { ScrollToDiv('contact'); setMenuOn(false) }} className='text-white text-base font-bold cursor-pointer'>Contato</h1>
                    </div>
                </div>
            }
        </div>
    )
}