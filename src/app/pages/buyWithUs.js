import Image from "next/image";
import image_robot from '../assets/buyWithUs/image-Robot.svg'
import { FaCheckCircle, FaWhatsapp } from "react-icons/fa";
export default function BuyWhitUs() {
    return (
        <div className=" max-w-[950px] m-auto p-10 bg-white shadow-lg border rounded-3xl 2xl:-translate-y-10 md:-translate-y-28 -translate-y-12 lg:h-[33rem]">
            <div className="flex items-start flex-col rounded-2xl">
                <div className="flex flex-col items-start gap-5">
                    <h1 className="text-textTitleDefault font-semibold lg:text-2xl max-w-xs lg:leading-6">Ao adquirir conosco, você tem a certeza de:  </h1>
                    <p className="md:text-base text-sm">Construir uma presença sólida com seguidores reais que não apenas acompanham, mas também se envolvem ativamente com o que você tem a oferecer.<span className="font-extrabold italic">+</span></p>
                </div>
                <div className="flex md:items-start justify-start items-center gap-4 md:flex-row flex-col  w-full rounded-2xl mt-6">
                    <Image alt="imagem_robo" src={image_robot} className="md:flex hidden image_robot max-w-[250px] animatedOpacity" />
                    <Image alt="imagem_robo" src={image_robot} className="md:hidden flex image_robot max-w-[250px] " />
                    <div className="md:flex hidden border-b-2 w-2 h-72 bg-yellowDefault image_robot"></div>
                    <div className="grid grid-flow-row-dense md:grid-cols-2 md:items-start items-center  gap-5 ">
                        <div className="flex items-center gap-1 animatedElementUp">
                            <FaCheckCircle className="text-yellowDefault  m-2 text-sm " />
                            <p className="font-medium  w-52 md:text-sm text-xs"> Perfis alinhados com seu nicho</p>
                        </div>
                        <div className="flex items-center gap-1 animatedElementUp">
                            <FaCheckCircle className="text-yellowDefault  m-2 text-sm " />
                            <p className="font-medium w-52   md:text-sm text-xs ">Seguidores reais e engajados</p>
                        </div>
                        <div className="flex items-center gap-1 animatedElementUp">
                            <FaCheckCircle className="text-yellowDefault  m-2 text-sm " />
                            <p className="font-medium w-52   md:text-sm text-xs ">Atendimento dedicado e ágil</p>
                        </div>
                        <div className="flex items-center gap-1 animatedElementUp">
                            <FaCheckCircle className="text-yellowDefault  m-2 text-sm " />
                            <p className="font-medium w-52   md:text-sm text-xs ">Perfis com interações genuínas e relevantes</p>
                        </div>
                        <div className="flex items-center gap-1 animatedElementUp">
                            <FaCheckCircle className="text-yellowDefault  m-2 text-sm " />
                            <p className="font-medium w-52   md:text-sm text-xs ">Transações protegidas e garantidas
                            </p>
                        </div>
                        <div className="flex items-center gap-1 animatedElementUp">
                            <FaCheckCircle className="text-yellowDefault  m-2 text-sm " />
                            <p className="font-medium w-52   md:text-sm text-xs ">Métricas detalhadas e atualizadas em tempo real
                            </p>
                        </div>
                        <div className="flex items-center gap-1 animatedElementUp">
                            <FaCheckCircle className="text-yellowDefault  m-2 text-sm " />
                            <p className="font-medium w-52   md:text-sm text-xs ">Contas criteriosamente selecionadas para resultados impactantes
                            </p>
                        </div>
                        <div className="flex items-center gap-1 animatedElementUp">
                            <FaCheckCircle className="text-yellowDefault  m-2 text-sm " />
                            <p className="font-medium w-52   md:text-sm text-xs ">Reconhecimento de mercado e qualidade assegurada
                            </p>
                        </div>
                        <a href="https://api.whatsapp.com/send?phone=5581998141853" target="_blank">
                            <button className='bgDefaultButton  z-50 w-52 py-2 rounded-2xl text-white flex items-center justify-center gap-2 font-bold text-xl'>Saiba mais <FaWhatsapp className="text-white text-2xl" /></button>
                        </a>
                    </div>
                    <div className="flex flex-col justify-start items-start gap-9">
                        {/* <div className="md:flex hidden  items-center  gap-1 animatedElementUp">
                            <FaCheckCircle className=" text-yellowDefault  w-5" />
                            <p className="font-medium  md:text-sm text-sm">Transações protegidas 
                            </p>
                        </div>
                        <div className="md:flex hidden  items-center  gap-1 animatedElementUp">
                            <FaCheckCircle className=" text-yellowDefault " />
                            <p className="font-medium md:text-sm text-sm  ">Métricas detalhadas  em tempo real
                            </p>
                        </div>
                        <div className="md:flex hidden  items-center  gap-1 animatedElementUp">
                            <FaCheckCircle className=" text-yellowDefault " />
                            <p className="font-medium md:text-sm text-sm  ">Contas criteriosamente selecionadas resultados impactantes
                            </p>
                        </div>
                        <div className="md:flex hidden  items-center  gap-1 animatedElementUp">
                            <FaCheckCircle className=" text-yellowDefault " />
                            <p className="font-medium md:text-sm text-sm  ">Reconhecimento de mercado qualidade assegurada
                            </p>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}