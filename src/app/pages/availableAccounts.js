"use client"
import Image from "next/image";
import accout_1 from '../assets/availableAccounts/imageCapa.png'
import accout_thumb_1 from '../assets/availableAccounts/imagePosCapa-2.jpeg'

import accout_2 from '../assets/availableAccounts/imageCapa-2.jpeg'
import accout_thumb_2 from '../assets/availableAccounts/imagePosCapa.png'


import accout_3 from '../assets/availableAccounts/imageCapa-3.jpeg'
import accout_thumb_3 from '../assets/availableAccounts/imagePosCapa-3.jpeg'

import accout_4 from '../assets/availableAccounts/imageCapa-4.jpeg'
import accout_thumb_4 from '../assets/availableAccounts/imagePosCapa-4.jpeg'

import accout_5 from '../assets/availableAccounts/imageCapa-5.png'
import accout_thumb_5 from '../assets/availableAccounts/imagePosCapa-5.jpeg'
   
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';

import '../globals.css';
export default function AvailableAccounts() {
    const listaDeContas = [
        {
            id: 1,
            alt:'imagem 1',
            img: accout_1,
            secondary_img: accout_thumb_1
        },
        {
            id: 2,
            alt:'imagem 2',
            img: accout_2,
            secondary_img: accout_thumb_2
        },
        {
            id: 3,
            alt:'imagem 3',
            img: accout_3,
            secondary_img: accout_thumb_3
        },
        {
            id: 4,
            alt:'imagem 4',
            img: accout_4,
            secondary_img: accout_thumb_4
        },
       {
            id: 5,
            alt:'imagem 5',
            img: accout_5,
            secondary_img: accout_thumb_5
        },
        
    ]
    return (
        <div className="md:py-20 py-10 max-w-[1000px] m-auto">
            <h1  className="text-textTitleDefault md:text-3xl text-xl font-bold text-center">Contas disponiveis</h1>
            <div id="accounts" className=" m-auto flex flex-row gap-6 flex-wrap">
                {listaDeContas.map((i) => {
                   return <Swiper pagination={{ clickable: true }} modules={[Pagination, Navigation]} navigation={true} className="mySwiper max-w-[240px]">
                         <> <SwiperSlide className='mt-10 relative'>
                            <div className="relative w-60">
                                <Image alt={i.alt} style={{ objectFit: 'cover', width: '100%', height: '100%' }} width={400} height={200} src={i.img} />
                            </div>
                        </SwiperSlide>
                            <SwiperSlide className='mt-10 relative'>
                                <div className="relative w-60">
                                    <Image alt={i.alt}  style={{ objectFit: 'cover', width: '100%', height: '100%' }} width={400} height={200} src={i.secondary_img} />
                                </div>
                            </SwiperSlide>
                        </>

                    </Swiper>
                })
                }
            </div>

        </div>
    )
}
