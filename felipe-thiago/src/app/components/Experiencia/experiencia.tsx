const Experiencia = () => {
    return (
        <section id="experiencia" className="pt-12 mt-60 md:my-15 flex items-center justify-center">
            <div className="mx-12 w-2/3">
                <h2 className="text-3xl text-amber-200 mb-8">Experiência Acadêmica</h2>
                <div className="flex w-full justify-between items-center gap-5 mb-5">
                    <p className="text-blue-400 font-bold">Técnico em Desenvolvimento de Sistemas</p>
                    <div className="flex flex-col items-end">
                        <p className="text-right">ETEC Rubens de Faria e Souza EaD</p>
                        <p className="text-gray-500">2020-2022</p>
                    </div>
                </div>
                <div className="flex w-full justify-between items-center gap-5 mb-5">
                    <p className="text-blue-400 font-bold">Desenvolvedor de Software Multiplataforma</p>
                    <div className="flex flex-col items-end">
                        <p className="text-right">FATEC Votorantim</p>
                        <p className="text-gray-500">2023-hoje</p>
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default Experiencia;