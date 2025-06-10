"use client";
import { Accordion } from "@material-tailwind/react";
import * as React from 'react';
import { IoIosArrowDown } from "react-icons/io";

const Experiencia = () => {

    return (
        <section id="experiencia" className="pt-12 mt-60 md:my-15 flex items-center justify-center">
            <div className="mx-12 w-2/3">
                <h2 className="text-3xl text-amber-200 mb-8">Experiência Acadêmica</h2>

                <div className="my-5">
                    <Accordion>
                        <Accordion.Item value="etec">
                            <Accordion.Trigger className="flex flex-col md:flex-row w-full justify-between items-center gap-5 px-5 rounded-t-2xl bg-blue-900 group-data-[open=false]:rounded-2xl cursor-pointer">
                                <p className="text-blue-400 font-bold">Técnico em Desenvolvimento de Sistemas </p>
                                
                                <div className="flex flex-col items-end">
                                    <p className="text-right">ETEC Rubens de Faria e Souza EaD</p>
                                    <p className="text-gray-500">2020-2022</p>
                                </div>
                            </Accordion.Trigger>
                            <Accordion.Content className="cursor-default p-5 pb-5 bg-neutral-800 rounded-b-2xl content-center justify-center">
                                Durante meu curso técnico pela ETEC de forma EaD participei do projeto que determinou a entrega de meu TCC. Durante esse período, nos aprofundamos na metodologia Scrum, e tive a oportunidade de representar o grupo como Scrum Master, servindo como um representante mediando o trabalho em equipe. 
                            </Accordion.Content>
                            <IoIosArrowDown className="h-4 w-4 group-data-[open=true]:rotate-180"/>
                        </Accordion.Item>
                    </Accordion>
                </div>
                
                <Accordion>
                    <Accordion.Item value="fatec">
                        <Accordion.Trigger className="cursor-pointer flex flex-col md:flex-row w-full justify-between items-center gap-5 px-5 rounded-t-2xl bg-blue-900 group-data-[open=false]:rounded-2xl">
                            <p className="text-blue-400 font-bold">Desenvolvedor de Software Multiplataforma</p>
                            
                            <div className="flex flex-col items-end">
                                <p className="text-right">FATEC Votorantim</p>
                                <p className="text-gray-500">2023-hoje</p>
                            </div>
                        </Accordion.Trigger>
                        <Accordion.Content className="cursor-default p-5 pb-5 bg-neutral-800 rounded-b-2xl content-center justify-center">
                            Na Fatec me aprofundei em uma variação maior de tecnologias. Devido ao tempo dedicado, acabei encontrando um conteúdo muito mais rico em relação à metodologia Scrum e às linguagens de programação, aplicando na prática ideias de trabalho em equipe e planejamento e desenvolvimento de um software.  
                        </Accordion.Content>
                        <IoIosArrowDown className="h-4 w-4 group-data-[open=true]:rotate-180"/>
                    </Accordion.Item>
                </Accordion>
                
            </div>
            
        </section>
    )
}

export default Experiencia;