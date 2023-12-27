import Image from "next/image";
import logo from '../assets/logo/Logo.svg'
import payFormat from '../assets/footer/payFormat.png'
import security from '../assets/footer/security.png'
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
export default function Footer() {
    return (
        <div id="contact" className="bg-[#252525]  md:mt-32 mt-20 md:px-0 px-5">
            <div className="px-2">
                <div className="max-w-[950px]  py-10 m-auto flex md:flex-row flex-wrap md:justify-between justify-center items-center md:h-[20rem]">
                    <Image src={logo} width={200} alt="logo"/>
                    <div className="flex items-center justify-start gap-10 flex-wrap ">
                        <div className="flex flex-col md:items-start justify-center gap-3">
                            <h1 className="font-bold md:text-2xl text-xl text-white">Contato</h1>
                            <div className="flex items-center gap-2">
                                <FaWhatsapp className="text-white text-2xl" />
                                <a className="text-white" href="https://api.whatsapp.com/send?phone=5581998141853" target="_blank">
                                    81 9 9814-1853
                                </a>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaEnvelope className="text-white text-2xl" />
                                <p className="text-white">yonez.jorgef80@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:items-start justify-center gap-3">
                            <div className="flex flex-col items-start justify-start gap-3">
                                <h1 className="font-bold md:text-2xl text-xl text-white">Formas de Pagamento</h1>
                                <div className="flex flex-col items-center gap-2">
                                    <Image src={security} width={300} />
                                    <Image src={payFormat} width={300} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-t-[1px] border-white w-full  h-2"> </div>
                <p className="text-center text-white text-xs font-semibold">2023 © Sorteio Patrocinios – Todos os Diretos Reservados.</p>
                <a href="https://deni-landingpages.com.br/" target="_blank" className="text-center m-auto w-full max-w-[400px] text-white pt-3 text-xs"><p className="text-white">Desenvolvido por: Deni-Landingpages</p></a>
            </div>
        </div>
    )
}