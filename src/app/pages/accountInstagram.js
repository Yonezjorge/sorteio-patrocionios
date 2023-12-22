import Image from 'next/image'
import celPhone from '../assets/accoutInstagram/3d-rendered-detailed-image-smartphone-created-with-generative-ai_1002229-1112.jpg_ga=GA1.1.538885495-PhotoRoom 1.png'
import pc from '../assets/accoutInstagram/launching-new-product-service-technology-development-process-space-rocket-launch-3d-render-yellow-rocket-lift-up-from-display-laptop_971718-1878.jpg_ga=GA1.1.538885495-PhotoRoom 1.png'
import { useScreenSize } from '@/context/screenSizeContext';
import { useEffect, useState } from 'react';
import AvailableAccounts from './availableAccounts';
export default function AccountInstagram() {
    const { screenY, screenX } = useScreenSize();
    const [y, setY] = useState()
    useEffect(() => {
        function scrollTop() {
            let pos = window.pageYOffset
            setY(pos)
        }
        window.addEventListener('scroll', () => scrollTop())

        return () => window.removeEventListener('scroll', () => scrollTop())
    }, [])
    return (
        <div className='md:pb-20 pb-10 px-2 '>
            <div className={`max-w-[860px] overflow-hidden m-auto md:mt-20 mt-10 flex md:flex-row flex-col  md:justify-between justify-center ${y < 2075 ? 'md:items-start  ' : 'md:items-end '}  items-start`}>
                <Image src={celPhone} alt='celPhone' height={180} className={`animatedOpacity image_robot md:hidden flex justify-center items-center m-auto `} />
                <div className='max-w-[400px]'>
                    <h1 className='text-textTitleDefault font-semibold md:text-2xl md:leading-10 leading-7 md:text-left text-center  text-lg'>Maximize sua Presença Digital <br /><span className='font-black text-yellowDefault'>Benefícios Estratégicos ao Comprar Contas no Instagram</span></h1>
                    <p className='text-textTitleDefault  md:text-base text-xs sm:m-0 m-auto pt-5 md:text-left text-center '>
                        Investir na compra estratégica de contas no Instagram pode revolucionar sua presença online. Imagine ganhar acesso imediato a um perfil já estabelecido, poupando tempo e energia necessários para o crescimento orgânico.
                        <br /> <br />
                        Os benefícios vão além dos números de seguidores. Ao adquirir uma conta no Instagram, você não apenas amplia sua base de seguidores, mas também herda um histórico de interações valiosas. Isso significa mergulhar em um ecossistema de engajamento que pode fortalecer sua autoridade e impacto na plataforma.
                        <br /> <br />
                        Além disso, a compra estratégica de contas pode oferecer uma base sólida para empresas e influenciadores, permitindo alcançar mais rapidamente um público relevante e engajado. A autenticidade e a qualidade do engajamento são pontos cruciais, e a aquisição cuidadosa de contas pode proporcionar um trampolim para uma presença digital de destaque.
                        <br /> <br />
                        Não deixe passar a oportunidade de impulsionar sua presença online de forma eficaz e estratégica. Considerar a compra de contas no Instagram pode ser o diferencial para alcançar novos patamares e estabelecer sua marca com impacto na era digital.
                    </p>
                </div>
                <div className='relative'>

                    <Image src={celPhone} alt='celPhone' height={590} className={`image_robot ${y > 1756 && y < 2075 ? "invisible" : ""} md:flex hidden`} />
                    {
                        y > 1756 && y < 2075 ?
                            <>
                                <div className=' max-w-[217px] max-h-[489px] w-full h-full'></div>
                                <Image src={celPhone} alt='celPhone' height={590} className={`image_robot fixed top-0 md:flex hidden`} />
                            </>
                            :
                            ''
                    }

                </div>
            </div>
            <AvailableAccounts/>
            <div className={`max-w-[860px] overflow-hidden m-auto md:mt-20 mt-10 flex md:flex-row flex-col md:justify-between justify-center ${y < 4704 ? 'md:items-start  ' : 'items-end'}  `}>
                <Image src={pc} alt='celPhone' height={150} className={`animatedOpacity image_robot md:hidden flex justify-center items-center m-auto `} />
                <div className='relative'>
                    <Image src={pc} alt='pc' height={320} className={`image_robot ${y > 4038 && y < 4704 ? "invisible" : ""} md:flex hidden`} />
                    {
                        y > 4038 && y < 4720 ?
                            <>
                                <div className=' max-w-[217px] max-h-[389px] w-full h-full'></div>
                                <Image src={pc} alt='pc' height={320} className={`image_robot fixed top-0 md:flex hidden`} />
                            </>
                            :
                            ''
                    }

                </div>
                <div className='max-w-[400px]'>
                    <h1 className='text-textTitleDefault font-semibold md:text-2xl md:leading-10 leading-7 md:text-left text-center text-lg'>Desbravando Novos Horizontes <br /><span className='font-black text-yellowDefault'>Estratégias Empreendedoras para Dominar o Instagram</span></h1>
                    <p className='text-textTitleDefault  md:text-base text-xs sm:m-0 m-auto pt-5 md:text-left text-center'>
                        Empreender com sucesso no Instagram demanda mais do que simplesmente marcar presença na plataforma. É preciso uma abordagem estratégica e direcionada para maximizar as oportunidades que essa rede social oferece aos negócios.

                        <br /> <br />
                        A chave para o sucesso está na compreensão da dinâmica do Instagram como um facilitador de negócios. Empreendedores visionários sabem que não se trata apenas de acumular seguidores, mas sim de criar uma comunidade engajada em torno da marca.

                        <br /> <br />
                        Através de estratégias de conteúdo relevantes e autênticas, é possível não apenas alcançar, mas também converter seguidores em clientes fiéis. A construção de uma narrativa cativante e o uso inteligente de recursos visuais podem transformar a percepção da marca e estabelecer conexões emocionais com o público-alvo.
                        <br /> <br />
                        Além disso, a capacidade de aproveitar as ferramentas do Instagram, como os Stories, IGTV e Reels, oferece oportunidades únicas para interagir com o público de maneiras criativas e impactantes.
                        <br /> <br />
                        Portanto, empreender com o Instagram significa compreender sua audiência, oferecer conteúdo de valor e estar sempre pronto para inovar. Aqueles que dominam essas estratégias não apenas sobrevivem, mas prosperam na paisagem competitiva atual.
                    </p>
                </div>

            </div>
        </div>
    )
}