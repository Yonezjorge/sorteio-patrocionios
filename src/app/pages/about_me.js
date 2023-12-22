import Image from 'next/image'
import jorge from '../assets/about_me/Group 11.svg'
import { FaInstagram, FaPaperPlane } from 'react-icons/fa'
export default function About_Me() {
    return (
        <div className='max-w-[1000px] overflow-hidden w-full  relative m-auto pt-20 pb-24 px-2'>
            <hr className='border-yellowDefault '/>
            <div className='flex flex-col justify-center md:items-center '>
                <div className='flex md:flex-row flex-col md:gap-10 md:items-start items-center'>
                    <div id='about' className='relative lg:h-[30rem] h-[20rem] '>
                        <Image src={jorge} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                    </div>
                    <div className='flex flex-col max-w-[380px] w-full overflow-hidden items-start '>
                        {/* <h1 className='font-bold text-yellowDefault text-2xl '>Yonez Jorge</h1>
                        <div className='border-b-2 border-yellowDefault w-full'></div> */}
                        <p className='text-textTitleDefault md:text-sm text-xs italic interactiveScroll_title'>
                            A cada dia que passa, o caminho percorrido fica mais incrível ! 🚀✨
                            <strong>São 5 anos mergulhados no mundo das redes sociais</strong>, construindo conexões,
                            contando histórias e impulsionando marcas. Quero agradecer a todos que fizeram
                            parte dessa jornada, desde os amigos e parceiros até os clientes que confiaram em nosso trabalho.
                        </p>
                        <br />
                        <p className='text-textTitleDefault md:text-sm text-xs italic interactiveScroll_title'>
                            Nossa experiência é alicerçada em resultados sólidos e estratégias que realmente funcionam. Se você está buscando elevar sua presença online, gerar engajamento genuíno e conquistar seu espaço nas redes, estamos aqui para fazer isso acontecer. Juntos, podemos transformar seguidores em entusiastas e transformar curtidas em oportunidades de negócio.
                        </p>
                        <br />
                        <p className='text-textTitleDefault md:text-sm text-xs italic interactiveScroll_title'>
                            Que venham mais anos de sucesso, aprendizado e parcerias incríveis. Contem conosco para alcançar novos patamares e criar uma presença online que deixará sua marca na memória de todos.
                        </p>
                    </div>
                </div>
                <div className='lg:px-20 mt-4 flex flex-col md:items-start items-center'>
                    <h1 className='text-textTitleDefault font-bold'>Minhas redes socias:</h1>
                    <div className='flex flex-row md:justify-start justify-center gap-3 flex-wrap max-w-[600px]'>
                        <a href="https://t.me/engajamento_instagramm" target="_blank">
                            <button className='bg-[#0494B1] flex items-center gap-2 shadow-md px-4 font-semibold text-white  justify-center text-sm py-3 rounded-xl'>
                                <FaPaperPlane className='text-xl' />Canal de clientes
                            </button>
                        </a>
                        <a href="https://www.instagram.com/sorteio_patrocinios_1.0?igshid=OGQ5ZDc2ODk2ZA==" target="_blank">
                            <button className=' bg-gradient-to-r from-[#F9CE34] via-[#EE2A7B] to-[#6228d7d0] flex items-center gap-2 shadow-md px-4 font-semibold text-white  justify-center text-sm py-3 rounded-xl'>
                                <FaInstagram className='text-xl ' />@sorteio_patrocinios_1.0
                            </button>
                        </a>
                        <a href="https://www.instagram.com/sorteio_patrocinios?igshid=OGQ5ZDc2ODk2ZA==" target="_blank">
                            <button className=' bg-gradient-to-r from-[#F9CE34] via-[#EE2A7B] to-[#6228d7d0] flex items-center gap-2 shadow-md px-4 font-semibold text-white  justify-center text-sm py-3 rounded-xl'>
                                <FaInstagram className='text-xl ' />@sorteio_patrocinios
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}