"use client";
import Image from "next/image";
import { FaReact, FaFigma, FaGithub, FaHtml5, FaCss3Alt, FaGoogleDrive, FaPhp } from "react-icons/fa";
import { SiTypescript, SiMongodb, SiEdgeimpulse } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { DiMysql } from "react-icons/di";
import { useState } from "react";

const Projetos = () => {

    const [expandido, setExpandido] = useState<number | null>(null);

    return (
        <section id="projetos" className="py-12 my-15 flex items-center justify-center">
            <div className="mx-12 w-2/3 ">
                <h2 className="text-3xl text-amber-200 mb-8">Principais Projetos</h2>

                <div className="md:grid md:grid-cols-2 gap-4">
                    {/* Projeto 1 */}
                    
                    <div className={`relative max-w-lvw rounded bg-neutral-900 overflow-hidden shadow-gray-900 shadow-2xl transition-all duration-300 
                        ${expandido === 1 ? "md:col-span-2 md:max-w-full" : ""} flex flex-col `}>
                        
                        <div className={`${expandido === 1 ? "w-16 h-16 rounded-full overflow-hidden absolute top-4 left-4 z-10 border-2 border-blue-700 bg-neutral-900" : "md:h-64 w-full relative rounded-none bg-transparent border-none"}`}>
                            <Image className={`object-cover ${expandido === 1 ? "w-16 h-16 rounded-full" : "w-full h-full rounded-none"}`} src={"/images/slide-1.jpg"} width={expandido === 1 ? 64 : 385} height={expandido === 1 ? 64 : 230} alt="Imagem"/>
                        </div>

                        <div className={`px-6 py-4 ${expandido === 1 ? "pt-20" : ""} flex-l flex flex-col transition-all duration-500`}>
                            <div className="font-bold text-xl mb-2">Projeto Integrador I - RecycleHub</div>
                            <div className="text-gray-500 text-base flex-1">
                                {expandido === 1 ? <div className="text-gray-500 text-base overflow-auto">
                                    <p>Este projeto foi realizado no primeiro semestre da Fatec e se define como uma plataforma de troca e comunicação entre compradores e vendedores de matéria-prima sucateada.</p> <br />
                                    <p>Teve inspiração em sites de e-commerce, mas se concentrava em ser um ponto em comum que pessoas com necessidades diferentes podiam se encontrar. Tinha por objetivo atender alguns dos 7 tópicos da ODS da ONU, com uma proposta de colaborar com a cidade e o meio-ambiente na reciclagem e no crescimento econômico.</p>
                                </div> : 
                                <p className="text-2xl">Plataforma de troca de sucata</p>}
                            </div>
                            <button
                                className="mt-2 px-4 py-2 bg-blue-700 text-white rounded self-start"
                                onClick={() => setExpandido(expandido === 1 ? null : 1)}
                            >
                                {expandido === 1 ? "Fechar" : "Saiba mais"}
                            </button>
                            
                        </div>
                        <div className="pt-4 pb-2 flex items-center flex-wrap gap-2 mt-auto mx-5 mb-5">
                            <div>
                                <a className="inline-block bg-gray-200 rounded-full px-5 py-2 text-sm font-semibold text-gray-700 mr-2" href="https://www.figma.com/design/g0xJmkRelJLilkSA9Igxmb/Untitled?node-id=0-1&t=uw2mok2Y9ljogHaA-1" target="_blank"><FaFigma /></a>
                                <a className="inline-block bg-gray-200 rounded-full px-5 py-2 text-sm font-semibold text-gray-700 mr-2" href="https://github.com/Felipe-Thiago/ProjetoSemestre" target="_blank"><FaGithub /></a>
                            </div>
                            <div>
                                <span className="inline-block text-white px-5 py-2 text-lg bg-blue-700 rounded-lg font-semibold mr-2"><FaHtml5 /></span>
                                <span className="inline-block text-white px-5 py-2 text-lg bg-blue-700 rounded-lg font-semibold mr-2"><FaCss3Alt /></span> 
                                <span className="inline-block text-white px-5 py-2 text-lg bg-blue-700 rounded-lg font-semibold mr-2"><IoLogoJavascript /></span> 
                                <span className="inline-block text-white px-5 py-2 text-lg bg-blue-700 rounded-lg font-semibold mr-2"><DiMysql /></span>  
                            </div>
                                
                        </div>

                    </div>

                    {/* Projeto 2 */}

                    <div className={`relative max-w-lvw rounded bg-neutral-900 overflow-hidden shadow-gray-900 shadow-2xl transition-all duration-300
                        ${expandido === 2 ? "md:col-span-2 md:max-w-full" : ""} flex flex-col`}>
                        
                        <div className={`${expandido === 2 ? "w-16 h-16 rounded-full overflow-hidden absolute top-4 left-4 z-10 border-2 border-blue-700 bg-neutral-900" : "md:h-64 w-full relative rounded-none bg-transparent border-none"}`}>
                            <a href="http://front-end-five-kappa.vercel.app/" target="_blank">
                                <Image className={`object-cover ${expandido === 2 ? "w-16 h-16 rounded-full" : "w-full h-full rounded-none"}`} src={"/images/projeto-compras.png"} width={expandido === 2 ? 64 : 385} height={expandido === 2 ? 64 : 230} alt="Imagem"/>
                            </a>
                            
                        </div>

                        <div className={`px-6 py-4 ${expandido === 2 ? "pt-20" : ""} flex-l flex flex-col transition-all duration-300`}>
                            <div className="font-bold text-xl mb-2">Projeto Integrador II - Projeto Compras</div>
                            <div className="text-gray-500 text-base flex-1">
                                {expandido === 2 ? <div className="text-gray-500 text-base overflow-auto">
                                    <p>Este projeto ainda está sendo desenvolvido e acontece em uma colaboração entre os alunos da Fatec e a própria Fatec para ajudar com necessidades encontradas na secretaria. 
                                    </p><br />
                                    <p>Consiste em um sistema de concentração dos pedidos de compras de materiais realizados pelos funcionários da Fatec à diretora de serviços administrativos, que antes eram feitos de forma verbal e sem histórico.</p>
                                </div> : 
                                <p className="text-2xl">Plataforma de listagem de pedidos da Fatec</p>}
                            </div>
                            <button
                                className="mt-2 px-4 py-2 bg-blue-700 text-white rounded self-start"
                                onClick={() => setExpandido(expandido === 2 ? null : 2)}
                            >
                                {expandido === 2 ? "Fechar" : "Saiba mais"}
                            </button>
                            
                        </div>
                        <div className="pt-4 pb-2 flex items-center flex-wrap gap-2 mt-auto mx-5 mb-5">
                            <div>
                                <a className="inline-block bg-gray-200 rounded-full px-5 py-2 text-sm font-semibold text-gray-700 mr-2" href="https://www.figma.com/proto/KKRDaOJgsXiG5Q4ichvzfQ/Projeto-Compras?node-id=0-1&t=KZYojtzoBVLTRz2H-1" target="_blank"><FaFigma /></a>
                                <a className="inline-block bg-gray-200 rounded-full px-5 py-2 text-sm font-semibold text-gray-700 mr-2" href="https://github.com/DSM-Projeto-Compras/Documentacao" target="_blank"><FaGithub /></a>
                            </div>
                            <div>
                                <span className="inline-block text-white px-5 py-2 text-lg bg-blue-700 rounded-lg font-semibold mr-2"><FaReact /></span>
                                <span className="inline-block text-white px-5 py-2 text-lg bg-blue-700 rounded-lg font-semibold mr-2"><SiTypescript /></span> 
                                <span className="inline-block text-white px-5 py-2 text-lg bg-blue-700 rounded-lg font-semibold mr-2"><RiTailwindCssFill /></span> 
                                <span className="inline-block text-white px-5 py-2 text-lg bg-blue-700 rounded-lg font-semibold mr-2"><SiMongodb /></span>
                            </div>
                                
                        </div>
                    </div>

                    {/* Projeto 3 */}

                    <div className={`relative max-w-lvw rounded bg-neutral-900 overflow-hidden shadow-gray-900 shadow-2xl transition-all duration-300
                        ${expandido === 3 ? "md:col-span-2 md:max-w-full" : ""} flex flex-col`}>
                        
                        <div className={`${expandido === 3 ? "w-16 h-16 rounded-full overflow-hidden absolute top-4 left-4 z-10 border-2 border-blue-700 bg-neutral-900" : "md:h-64 w-full relative rounded-none bg-transparent border-none"}`}>
                            <a href="http://front-end-five-kappa.vercel.app/" target="_blank">
                                <Image className={`object-cover  ${expandido === 3 ? "w-16 h-16 rounded-full" : "w-full h-full rounded-none"}`} src={"/images/tecnoclass.png"} width={expandido === 3 ? 64 : 385} height={expandido === 3 ? 64 : 230} alt="TecnoClass"/>
                            </a>
                            
                        </div>

                        <div className={`px-6 py-4 ${expandido === 3 ? "pt-20" : ""} flex-l flex flex-col transition-all duration-300`}>
                            <div className="font-bold text-xl mb-2">TCC - TecnoClass</div>
                            <div className="text-gray-500 text-base flex-1">
                                {expandido === 3 ? <div className="text-gray-500 text-base overflow-auto">
                                    <p>
                                        Este projeto foi concluído em 2022 e consiste em um protótipo de plataforma de ensino à distância visando facilitar o estudo para pessoas atarefadas durante a pandemia do Covid-19. <br />Era formado basicamente por um fórum online com a cooperação entre professores e estudantes que utilizassem a plataforma, construído em HTML/CSS com PHP e MySQL. 
                                    </p><br />
                                    <p>
                                        O intuito deste projeto foi dominar a aplicação de formulários - como o de cadastro de usuários e envio de mensagens -, utilizar o padrão MVC e especialmente aplicar a metodologia Scrum, havendo um planejamento contínuo auxiliado pela plataforma Trello. 
                                        </p>
                                </div> : 
                                <p className="text-2xl">Protótipo de plataforma de EaD</p>}
                            </div>
                            <button
                                className="mt-2 px-4 py-2 bg-blue-700 text-white rounded self-start"
                                onClick={() => setExpandido(expandido === 3 ? null : 3)}
                            >
                                {expandido === 3 ? "Fechar" : "Saiba mais"}
                            </button>
                            
                        </div>
                        <div className="pt-4 pb-2 flex items-center flex-wrap gap-2 mt-auto mx-5 mb-5">
                            <div>
                                <a className="inline-block bg-gray-200 rounded-full px-5 py-2 text-sm font-semibold text-gray-700 mr-2" href="https://drive.google.com/drive/folders/1y3VSXBBHhDa9_OnJrK9DFloCq6eHlTSZ?usp=sharing" target="_blank"><FaGoogleDrive /></a>
                                <a className="inline-block bg-gray-200 rounded-full px-5 py-2 text-sm font-semibold text-gray-700 mr-2" href="https://github.com/Felipe-Thiago/TCC-EAD-DS.git" target="_blank"><FaGithub /></a>
                            </div>
                            <div>
                                <span className="inline-block text-white px-5 py-2 text-lg bg-blue-700 rounded-lg font-semibold mr-2"><FaHtml5 /></span>
                                <span className="inline-block text-white px-5 py-2 text-lg bg-blue-700 rounded-lg font-semibold mr-2"><FaCss3Alt /></span> 
                                <span className="inline-block text-white px-5 py-2 text-lg bg-blue-700 rounded-lg font-semibold mr-2"><FaPhp /></span> 
                                <span className="inline-block text-white px-5 py-2 text-lg bg-blue-700 rounded-lg font-semibold mr-2"><DiMysql /></span>
                            </div>
                                
                        </div>
                    </div>

                    {/* Projeto 4 */}

                    <div className={`relative max-w-lvw rounded bg-neutral-900 overflow-hidden shadow-gray-900 shadow-2xl transition-all duration-300
                        ${expandido === 4 ? "md:col-span-2 md:max-w-full" : ""} flex flex-col`}>
                        
                        <div className={`${expandido === 4 ? "w-16 h-16 rounded-full overflow-hidden absolute top-4 left-4 z-10 border-2 border-blue-700 bg-neutral-900" : "md:h-64 w-full relative rounded-none bg-transparent border-none"}`}>
                            <Image className={`object-cover ${expandido === 4 ? "w-16 h-16 rounded-full" : "w-full h-full rounded-none"}`} src={"/images/edgeimpulse.png"} width={expandido === 4 ? 64 : 385} height={expandido === 4 ? 64 : 230} alt="edge-impulse"/>
                        </div>

                        <div className={`px-6 py-4 ${expandido === 4 ? "pt-20" : ""} flex-l flex flex-col transition-all duration-300`}>
                            <div className="font-bold text-xl mb-2">FIT - IA na Saúde</div>
                            <div className="text-gray-500 text-base flex-1">
                                {expandido === 4 ? <div className="text-gray-500 text-base overflow-auto">
                                    <p>No quinto semestre tivemos a experiência de conhecer o trabalho da Fit, que durante uma semana nos introduziu aos primeiros conceitos de aprendizado em máquina com o desenvolvimento de um projeto que analisa imagens de ressonância magnética para detectar possíveis tumores cerebrais, através da ferramenta Edge Impulse. Tudo está relatado em um diário de bordo de uma semana, onde anotei os conceitos de inteligência artificial que me auxiliaram nas aulas do curso
                                    </p>
                                </div> : 
                                <p className="text-2xl">Classificador de tumor cerebral</p>}
                            </div>
                            <button
                                className="mt-2 px-4 py-2 bg-blue-700 text-white rounded self-start"
                                onClick={() => setExpandido(expandido === 4 ? null : 4)}
                            >
                                {expandido === 4 ? "Fechar" : "Saiba mais"}
                            </button>
                            
                        </div>
                        <div className="pt-4 pb-2 flex items-center flex-wrap gap-2 mt-auto mx-5 mb-5">
                            <div>
                                <a className="inline-block bg-gray-200 rounded-full px-5 py-2 text-sm font-semibold text-gray-700 mr-2" href="https://github.com/Felipe-Thiago/fatec-dsm-csfirebase" target="_blank"><SiEdgeimpulse /></a>
                            </div>
                            <div>
                                <span className="inline-block text-white px-5 py-2 text-lg bg-blue-700 rounded-lg font-semibold mr-2"><SiEdgeimpulse /></span>
                            </div>
                                
                        </div>
                    </div>

                    {/* Projeto 5 */}

                    <div className={`relative max-w-lvw rounded bg-neutral-900 overflow-hidden shadow-gray-900 shadow-2xl transition-all duration-300
                        ${expandido === 5 ? "md:col-span-2 md:max-w-full" : ""} flex flex-col`}>
                        
                        <div className={`${expandido === 5 ? "w-16 h-16 rounded-full overflow-hidden absolute top-4 left-4 z-10 border-2 border-blue-700 bg-neutral-900" : "md:h-64 w-full relative rounded-none bg-transparent border-none"}`}>
                            <Image className={`object-cover ${expandido === 5 ? "w-16 h-16 rounded-full" : "w-full h-full rounded-none"}`} src={"/images/firebasemap.png"} width={expandido === 5 ? 64 : 385} height={expandido === 5 ? 64 : 230} alt="edge-impulse"/>
                        </div>

                        <div className={`px-6 py-4 ${expandido === 5 ? "pt-20" : ""} flex-l flex flex-col transition-all duration-300`}>
                            <div className="font-bold text-xl mb-2">Mapeamento com Firebase</div>
                            <div className="text-gray-500 text-base flex-1">
                                {expandido === 5 ? <div className="text-gray-500 text-base overflow-auto">
                                    <p>Durante as férias entre o primeiro e o segundo semestre tive a oportunidade de realizar uma atividade extracurricular trabalhando com o banco de dados Firebase, em que foi implementado um mapa com sistema de marcação, autenticação e login. 
                                </p>
                                </div> : 
                                <p className="text-2xl">Sistema de marcação em mapa</p>}
                            </div>
                            <button
                                className="mt-2 px-4 py-2 bg-blue-700 text-white rounded self-start"
                                onClick={() => setExpandido(expandido === 5 ? null : 5)}
                            >
                                {expandido === 5 ? "Fechar" : "Saiba mais"}
                            </button>
                            
                        </div>
                        <div className="pt-4 pb-2 flex items-center flex-wrap gap-2 mt-auto mx-5 mb-5">
                            <div>
                                <a className="inline-block bg-gray-200 rounded-full px-5 py-2 text-sm font-semibold text-gray-700 mr-2" href="https://studio.edgeimpulse.com/studio/649836" target="_blank"><FaGithub /></a>
                            </div>
                            <div>
                                <span className="inline-block text-white px-5 py-2 text-lg bg-blue-700 rounded-lg font-semibold mr-2"><FaHtml5 /></span>
                                <span className="inline-block text-white px-5 py-2 text-lg bg-blue-700 rounded-lg font-semibold mr-2"><FaCss3Alt /></span> 
                                <span className="inline-block text-white px-5 py-2 text-lg bg-blue-700 rounded-lg font-semibold mr-2"><IoLogoJavascript /></span>
                            </div>
                                
                        </div>
                    </div>
                    
                </div>
                
                
                
            </div>
            
        </section>
    )
}

export default Projetos;