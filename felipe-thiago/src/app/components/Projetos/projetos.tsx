import Image from "next/image";
import { FaReact, FaFigma, FaGithub, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiTypescript, SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { DiMysql } from "react-icons/di";

const Projetos = () => {
    return (
        <section id="projetos" className="py-12 my-15 flex items-center justify-center">
            <div className="mx-12 w-2/3 ">
                <h2 className="text-3xl text-amber-200 mb-8">Principais Projetos</h2>
                <div className="md:grid md:grid-cols-2 gap-4 flex flex-col">
                    <div className="max-w-sm rounded bg-neutral-900 overflow-hidden shadow-gray-900 shadow-2xl">
                        <div className="md:h-64">
                            <Image className="object-none" src={"/images/slide-1.jpg"} width={385} height={230} alt="Imagem"/>
                        </div>
                        
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Projeto Integrador I - RecycleHub</div>
                            <div className="text-gray-500 text-base overflow-auto h-30">
                                <p>Este projeto foi realizado no primeiro semestre da Fatec e se define como uma plataforma de troca e comunicação entre compradores e vendedores de matéria-prima sucateada.</p> <br />
                                <p>Teve inspiração em sites de e-commerce, mas se concentrava em ser um ponto em comum que pessoas com necessidades diferentes podiam se encontrar. Tinha por objetivo atender alguns dos 7 tópicos da ODS da ONU, com uma proposta de colaborar com a cidade e o meio-ambiente na reciclagem e no crescimento econômico.</p>
                            </div>
                            
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <a className="inline-block bg-gray-200 rounded-full px-5 py-2 text-sm font-semibold text-gray-700 mr-2 mb-2" href="https://www.figma.com/design/g0xJmkRelJLilkSA9Igxmb/Untitled?node-id=0-1&t=uw2mok2Y9ljogHaA-1" target="_blank"><FaFigma /></a>
                            <a className="inline-block bg-gray-200 rounded-full px-5 py-2 text-sm font-semibold text-gray-700 mr-2 mb-2" href="https://github.com/Felipe-Thiago/ProjetoSemestre" target="_blank"><FaGithub /></a> 
                        </div>
                        <div className="px-6 pb-2">
                            <span className="inline-block text-white px-5 py-2 text-lg bg-blue-700 rounded-lg font-semibold mr-2"><FaHtml5 /></span>
                            <span className="inline-block text-white px-5 py-2 text-lg bg-blue-700 rounded-lg font-semibold mr-2"><FaCss3Alt /></span> 
                            <span className="inline-block text-white px-5 py-2 text-lg bg-blue-700 rounded-lg font-semibold mr-2"><IoLogoJavascript /></span> 
                            <span className="inline-block text-white px-5 py-2 text-lg bg-blue-700 rounded-lg font-semibold mr-2"><DiMysql /></span>
                        </div>
                    </div>
                    <div className="max-w-sm rounded bg-neutral-900 overflow-hidden shadow-gray-900 shadow-2xl">
                        <div className="h-64 w-full relative">
                            <a href="http://front-end-five-kappa.vercel.app/" target="_blank">
                                <Image className="object-none" src={"/images/projeto-compras.png"} fill alt="Projeto Compras" />
                            </a>
                        </div>
                        
                        
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Projeto Integrador II - Compras</div>
                            <div className="text-gray-500 text-base overflow-auto h-30">
                                <p>Este projeto ainda está sendo desenvolvido e acontece em uma colaboração entre os alunos da Fatec e a própria Fatec para ajudar com necessidades encontradas na secretaria. 
                                </p><br />
                                <p>Consiste em um sistema de concentração dos pedidos de compras de materiais realizados pelos funcionários da Fatec à diretora de serviços administrativos, que antes eram feitos de forma verbal e sem histórico.</p>
                            </div>
                            
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <a className="inline-block bg-gray-200 rounded-full px-5 py-2 text-sm font-semibold text-gray-700 mr-2 mb-2" href="https://www.figma.com/design/g0xJmkRelJLilkSA9Igxmb/Untitled?node-id=0-1&t=uw2mok2Y9ljogHaA-1" target="_blank"><FaFigma /></a>
                            <a className="inline-block bg-gray-200 rounded-full px-5 py-2 text-sm font-semibold text-gray-700 mr-2 mb-2" href="https://github.com/DSM-Projeto-Compras/Documentacao" target="_blank"><FaGithub /></a>
                        </div>
                        <div className="px-6 pb-2">
                            <span className="inline-block text-white px-5 py-2 text-lg bg-blue-700 rounded-lg font-semibold mr-2"><FaReact /></span>
                            <span className="inline-block text-white px-5 py-2 text-lg bg-blue-700 rounded-lg font-semibold mr-2"><SiTypescript /></span> 
                            <span className="inline-block text-white px-5 py-2 text-lg bg-blue-700 rounded-lg font-semibold mr-2"><RiTailwindCssFill /></span> 
                            <span className="inline-block text-white px-5 py-2 text-lg bg-blue-700 rounded-lg font-semibold mr-2"><SiMongodb /></span>
                        </div>
                    </div>
                    <div><h3>TCC</h3></div>
                    <div><h3>Inteligência Artificial na saúde</h3></div>
                </div>
                
                
                
            </div>
            
        </section>
    )
}

export default Projetos;