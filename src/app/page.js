"use client"
import { FaWhatsapp } from 'react-icons/fa';
import Header from './components/header';
import Presentation from './pages/presentation';
import BuyWhitUs from './pages/buyWithUs';
import Depoiments from './pages/depoiments';
import AccountInstagram from './pages/accountInstagram';
import AvailableAccounts from './pages/availableAccounts';
import About_Me from './pages/about_me';
import Footer from './components/footer';
import { InteractiveScroll } from '@/utils/interactiveScroll';
import Faq from './components/faq';
export default function Home() {

  return (
    <>
      <InteractiveScroll />
      <a href="https://api.whatsapp.com/send?phone=5581998141853" target="_blank">
        <button className='bg-green-500 w-16 h-16 z-[999] fixed bottom-3 right-3 flex justify-center items-center rounded-full'>
          <FaWhatsapp className='text-white text-3xl' />
        </button>
      </a>
      <Header />
      <Presentation />
      <BuyWhitUs />
      <Depoiments />
      {/* <AvailableAccounts /> */}
      <AccountInstagram />
      <About_Me />
      <Faq />
      <Footer />
    </>

  )
}
