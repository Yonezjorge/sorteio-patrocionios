import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from "@chakra-ui/react";

export default function Faq() {
    return (
        <div className="px-2">
            <div id="questions" className="max-w-[900px] m-auto py-">
                <h1 className="md:text-3xl text-xl font-bold text-textTitleDefault">Perguntas <span className="text-yellowDefault">Frequentes</span></h1>
                <Accordion allowMultiple>
                    <AccordionItem className="border border-l-yellowDefault border-l-2 rounded-tr-md rounded-br-md my-4 py-4 p-3">
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left' className="font-bold md:text-base text-xs">
                                    Como funciona o suporte ao cliente?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} className="text-xs">
                            Nossa equipe de suporte está disponível para auxiliar e esclarecer dúvidas durante todo o processo. Oferecemos um
                            suporte humanizado e ágil, buscando atender às necessidades dos nossos clientes da melhor maneira possível.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className="border border-l-yellowDefault border-l-2 rounded-tr-md rounded-br-md my-4 py-4 p-3">
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left' className="font-bold md:text-base text-xs">
                                    É confiável adquirir contas nesta plataforma?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} className=" text-xs">
                            Nossa plataforma prioriza a confiabilidade e transparência em todas as transações. Trabalhamos diligentemente para
                            garantir a segurança e a credibilidade em cada interação. Além disso, nossa equipe realiza uma cuidadosa verificação das
                            contas disponíveis para compra, assegurando a autenticidade e qualidade para oferecer aos nossos clientes uma
                            experiência confiável e satisfatória.
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem className="border border-l-yellowDefault border-l-2 rounded-tr-md rounded-br-md my-4 py-4 p-3">
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left' className="font-bold md:text-base text-xs">
                                    Existe garantia de seguidores reais e engajados?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} className="text-xs">
                            Sim, nos comprometemos a oferecer contas com seguidores reais e engajados. Procuramos proporcionar não apenas
                            números, mas sim uma comunidade que se interesse verdadeiramente pelo conteúdo da sua marca.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className="border border-l-yellowDefault border-l-2 rounded-tr-md rounded-br-md my-4 py-4 p-3">
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left' className="font-bold md:text-base text-xs">
                                    Os seguidores oferecidos são comprados ou falsos?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} className=" text-xs">
                            Não, todos os seguidores disponíveis em nossa plataforma são autênticos e reais. Nossa prioridade é oferecer contas
                            com seguidores genuínos e engajados, construídos organicamente ao longo do tempo.
                            Relacionado ao shadowban, é importante ressaltar que comprar seguidores de fontes não confiáveis ou falsas pode
                            resultar em penalidades como o shadowban. A prática de adquirir seguidores de maneira não autêntica pode afetar
                            negativamente o alcance e o engajamento da conta. Por isso, nossa seleção de contas é criteriosa, visando evitar
                            qualquer problema relacionado ao shadowban que possa comprometer a performance da sua conta.
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem className="border border-l-yellowDefault border-l-2 rounded-tr-md rounded-br-md my-4 py-4 p-3">
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left' className="font-bold md:text-base text-xs">
                                    Como são selecionadas as contas disponíveis para compra?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} className=" text-xs">
                            Nossa equipe realiza uma seleção meticulosa das contas disponíveis, priorizando perfis autênticos com seguidores reais
                            e interações genuínas. Cada conta é avaliada quanto à sua qualidade e relevância para garantir uma experiência positiva
                            para nossos clientes.
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem className="border border-l-yellowDefault border-l-2 rounded-tr-md rounded-br-md my-4 py-4 p-3">
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left' className="font-bold  md:text-base text-xs">
                                    Quais medidas de segurança são adotadas durante a transação?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} className=" text-xs">
                            Nossa plataforma prioriza a segurança dos clientes. Todas as transações são realizadas de forma segura e protegida.
                            Utilizamos protocolos de segurança e métodos de pagamento confiáveis para garantir uma experiência tranquila para
                            nossos usuários.
                            Nossa plataforma prioriza a segurança dos clientes. Todas as transações são realizadas de forma segura e protegida.
                            Utilizamos protocolos de segurança e métodos de pagamento confiáveis para garantir uma experiência tranquila para
                            nossos usuários.

                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem className="border border-l-yellowDefault border-l-2 rounded-tr-md rounded-br-md my-4 py-4 p-3">
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left' className="font-bold md:text-base text-xs">
                                    É possível obter métricas e informações atualizadas das contas adquiridas?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} className="text-xs mt-2">
                            Sim, fornecemos métricas atualizadas das contas adquiridas, permitindo que nossos clientes acompanhem o
                            desempenho e o engajamento de forma contínua. Estamos empenhados em fornecer informações relevantes para
                            auxiliar no crescimento da sua presença digital.
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    )
}