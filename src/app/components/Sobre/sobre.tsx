import { FaReact, FaFigma, FaDocker, FaGithub, FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { SiTypescript, SiMongodb } from "react-icons/si";
import Image from "next/image";

const Sobre = () => {
    return(
        <div className="md:h-dvh">
            <div className="h-3/4 md:h-3/4 flex items-center justify-center">
                <section id="intro" className="flex flex-col-reverse md:flex-row justify-center items-center gap-10 md:gap-20">
                    <div>
                        <h1 className="text-4xl md:text-7xl text-blue-600">
                            <span className="text-gray-600">&lt;</span>
                                Felipe Thiago
                            <span className="text-gray-600">/&gt;</span>
                        </h1>
                        <h2 className="text-green-700">&lt;!&ndash;&ndash; Desenvolvedor de Software &ndash;&ndash;&gt;</h2>
                        <div className="text-4xl mt-5 flex gap-5 justify-center">
                            <FaReact /> <FaDocker /> <FaFigma /> <SiTypescript /> <SiMongodb />
                        </div>

                        <div className="flex justify-center content-center md:gap-32 gap-12 pt-12 border-l">
                            <a href="https://github.com/Felipe-Thiago" target="_blank" className="p-3 rounded-3xl hover:bg-gray-800">
                                <FaGithub className="text-4xl"/>
                            </a> 
                            <a href="https://www.linkedin.com/in/felipe-thiago-779797219/" target="_blank" className="p-3 rounded-3xl hover:bg-gray-800">
                                <FaLinkedin className="text-4xl"/>    
                            </a>
                
                            <a href="mailto:felipethiagodasilva@gmail.com" className="p-3 rounded-3xl hover:bg-gray-800">
                                <CiMail className="text-4xl"/>
                            </a>
                        </div>
                    </div>
                    
                    <div className="relative size-48 md:size-64 flex items-center justify-center">
                        <Image src="/images/felipe.jpg" alt={"Felipe"} fill className="rounded-full "/>
                    </div>
                    
                </section>
            </div>

            

            <section id="sobre" className="md:h-1/4 bg-neutral-900 flex items-center justify-center">
                <div className="mx-12 md:my-8 w-2/3 py-12">
                    <h2 className="font-bold text-3xl">Sobre mim</h2>
                    <h3 className="text-justify mt-3">Sou estudante de Desenvolvimento de Software Multiplataforma na FATEC Votorantim. Estou nesta área desde o ensino médio, sendo formado como técnico de Desenvolvimento de Software na ETEC. Este portfólio reúne minhas principais experiências e atividades realizadas dentro da Fatec, em especial relacionadas à tecnologia.</h3>
                </div>
            </section>
        </div>
        
        
    )
}

export default Sobre;