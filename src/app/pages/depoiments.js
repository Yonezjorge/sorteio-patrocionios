'use client'
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
//images

import person_1 from '../assets/comments/2Q== 1.png'
import person_2 from '../assets/comments/person04-300x300 1.png'
import person_3 from '../assets/comments/fdfcefc24e58a4e3ed4dd6099d530353 1.png'
import person_4 from '../assets/comments/pessoas-com-dentes-grandes 1.png'
import person_5 from '../assets/comments/whatsapp-image-2019-07-24-at-143033-600x451-015a81e0 1.png'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';

import '../globals.css';
import Image from 'next/image';
import { FaStar, FaWhatsapp } from 'react-icons/fa';
import { useScreenSize } from '@/context/screenSizeContext';


export default function Depoiments() {
    const { screenX } = useScreenSize()
    const [innerWidth, setInnerWidth] = useState();
    const [innerHeigth, setInnerHeigth] = useState()
    const listComments = [
        {
            id: 1,
            img: person_2,
            name: 'Jaqueline Santos',
            description: 'Comprei o meu perfil com a Sorteio Patrocionios para anunciar, veio certinho sem restrição, funcionando perfeitamente para anunciar e divulgar nos storys, alcance da conta excelente e o melhor ainda: com um público real. Consegui fazer várias vendas por lá. '
            ,
            date: '08/2023'
        }
        ,
        {
            id: 2,
            img: person_1,
            name: 'José silva',
            description: 'Melhores perfis que achei. Muita variedade e qualidade. São quentes e muito reais. Virei cliente fiel da sorteio_patrocinios. Os preços tbm são muito justos.'
            ,
            date: '01/2023'
        },
        {
            id: 3,
            img: person_3,
            name: 'Gilva borges',
            description: 'Comprei 1 perfil primeiramente, gostei do atendimento e da agilidade. Uns dias após comprei outro perfil e foi super tranquilo. Compra 100% segura, atendimento show!'
            ,
            date: '08/2022'
        },
        {
            id: 4,
            img: person_4,
            name: 'Alessandro Silva',
            description: 'A Sorteio patrocinios tem um serviço muito prático e dinâmico. Passam total confiança. Estava receoso de vender a conta, mas a confiança que me passaram não deixou dúvidas que estava fazendo um bom negócio. Recomendo muito!'
            ,
            date: '05/2023'

        },
        {
            id: 5,
            img: person_5,
            name: 'Gabriel A',
            description: 'Eu comprei o meu perfil para anunciar, veio certinho sem restrição, funcionando perfeitamente para anunciar e divulgar nos storys, alcance da conta excelente e o melhor ainda: com um público real. Consegui fazer várias vendas por lá. Grupo confiável para comprar contas.'
            ,
            date: '02/2023'

        },
    ]
    useEffect(() => {
        setInnerWidth(window.innerWidth);
        setInnerHeigth(window.innerHeigth);
      }, [screenX]);
    return (
        <div className='md:py-20 py-10'>
            <div className="">
                <h1 className="text-textTitleDefault lg:text-3xl text-xl font-semibold text-center max-w-[400px] leading-10 m-auto">Leia os depoimentos dos nossos clientes</h1>
            </div>
            <div id='depoimments'>
                <div className='max-w-[1000px] m-auto md:py-20 py-10'>
                    {innerWidth > 1024 ?
                        <Swiper pagination={{ clickable: true }} slidesPerView={3} modules={[Pagination, Navigation]} loop={true} spaceBetween={40} navigation={true} className="mySwiper ">
                            {listComments.map((item) => (
                                <SwiperSlide key={item.id} className=''>
                                    <div className='border p-4 rounded-2xl h-[12rem]'>
                                        <div className='flex flex-row items-start gap-1'>
                                            <div className='relative w-16 select-none '>
                                                <Image  objectFit='cover' height={230} width={230} src={item?.img} alt={`Imagem de ${item.name}`} className='rounded-full' />
                                            </div>
                                            <div className='flex flex-col items-start'>
                                                <h2 className='text-xs select-none '>{item.name}</h2>
                                                <div className='flex items-start gap-1'>
                                                    <FaStar className='text-yellow-200' />
                                                    <FaStar className='text-yellow-200' />
                                                    <FaStar className='text-yellow-200' />
                                                    <FaStar className='text-yellow-200' />
                                                    <FaStar className='text-yellow-200' />
                                                </div>
                                                <p className='text-[#848484] text-xs'>{item.date}</p>
                                            </div>
                                        </div>
                                        <div className={`h-24  overflow-hidden ${item.description.length > 189 ? "myScroll overflow-y-scroll" : ""} `}>
                                            <hr className='my-1' />
                                            <p className='text-[#848484] text-xs text-left '>{item.description}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        : innerWidth > 600 && innerWidth < 1024 ?
                            <Swiper slidesPerView={2} loop={true} modules={[Pagination, Navigation]} spaceBetween={80} pagination={true} navigation={true} className="mySwiper select-none ">
                                {listComments.map((item) => (
                                    <SwiperSlide key={item.id} className=''>
                                        <div className='border p-4 rounded-2xl h-[12rem]'>
                                            <div className='flex flex-row items-start gap-1'>
                                                <div className='relative w-16'>
                                                    <Image objectFit='cover' height={230} width={230} src={item?.img} alt={`Imagem de ${item.name}`} className='rounded-full' />
                                                </div>
                                                <div className='flex flex-col items-start'>
                                                    <h2 className='text-xs '>{item.name}</h2>
                                                    <div className='flex items-start gap-1'>
                                                        <FaStar className='text-yellow-200' />
                                                        <FaStar className='text-yellow-200' />
                                                        <FaStar className='text-yellow-200' />
                                                        <FaStar className='text-yellow-200' />
                                                        <FaStar className='text-yellow-200' />
                                                    </div>
                                                    <p className='text-[#848484] text-xs'>{item.date}</p>
                                                </div>
                                                <hr />
                                            </div>
                                            <div className={`h-24  overflow-hidden ${item.description.length > 189 ? "myScroll overflow-y-scroll" : ""} `}>
                                                <p className='text-[#848484] text-xs text-left '>{item.description}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            :
                            <Swiper slidesPerView={1} loop={true} modules={[Pagination, Navigation]} spaceBetween={80} pagination={true} navigation={true} className="mySwiper select-none  ">
                                {listComments.map((item) => (
                                    <SwiperSlide key={item.id} className=''>
                                        <div className='border p-4 rounded-2xl h-[12rem]'>
                                            <div className='flex flex-row items-start gap-1'>
                                                <div className='relative w-16'>
                                                    <Image objectFit='cover' height={430} width={430} src={item?.img} alt={`Imagem de ${item.name}`} className='rounded-full' />
                                                </div>
                                                <div className='flex flex-col items-start'>
                                                    <h2 className='text-xs '>{item.name}</h2>
                                                    <div className='flex items-start gap-1'>
                                                        <FaStar className='text-yellow-200' />
                                                        <FaStar className='text-yellow-200' />
                                                        <FaStar className='text-yellow-200' />
                                                        <FaStar className='text-yellow-200' />
                                                        <FaStar className='text-yellow-200' />
                                                    </div>
                                                    <p className='text-[#848484] text-xs'>{item.date}</p>
                                                </div>
                                                <hr />
                                            </div>
                                            <div className={`h-24  overflow-hidden ${item.description.length > 189 ? "myScroll overflow-y-scroll" : ""} `}>
                                                <p className='text-[#848484] text-xs text-left '>{item.description}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>}
                </div>
                <a href="https://api.whatsapp.com/send?phone=5581998141853" target="_blank">
                    <button className='bgDefaultButton m-auto  z-50 w-52 py-2 rounded-2xl text-white flex items-center justify-center gap-2 font-bold text-xl'>Solicitar contas <FaWhatsapp className="text-white text-2xl" /></button>
                </a>
            </div>
        </div>
    )
}