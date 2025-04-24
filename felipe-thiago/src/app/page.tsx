import Image from "next/image"
export default function Home() {

  return (
    <div id="main" className="grid font-[family-name:var(--font-geist-sans)]">
      <nav className="top-0 right-0 left-0 bg-blue-500 flex flex-wrap place-content-between text-xl cursor-default">
        <span className="p-5 md:ml-10"><a>&lt;Felipe/&gt;</a></span>
        <ul className="flex flex-wrap place-content-end">
          <a href="#sobre"><li className="p-5 hover:font-bold">Início</li></a>
          <a href="#projetos"><li className="p-5 hover:font-bold">Projetos</li></a>
          <a href="#redes"><li className="p-5 hover:font-bold">Contato</li></a>
        </ul>
      </nav>
      
    
      <section id="intro" className="">
        <div className="">
          <h1 className="text-6xl text-blue-600 mt-10 mb-1"><span className="text-gray-600">&lt;</span>Felipe Thiago <span className="text-gray-600">/&gt;</span></h1>
          <h2 className="text-green-700">&lt;!&ndash;&ndash; Desenvolvedor de Software &ndash;&ndash;&gt;</h2>
        </div>
        <div className="relative size-52 top-8">
          <Image src="/images/felipe.jpg" alt={"Felipe"} fill className="rounded-3xl"/>
        </div>
      </section>

      <section id="sobre" className="py-5 bg-neutral-700">
        <div className="container">
          <div className="row text-center">
            <div className="col">
                <h1>Felipe Thiago</h1>
                <h2>Sobre Mim</h2>
                <p>Olá! Sou Felipe, estudante de Desenvolvimento de Software Multiplataforma na Fatec Votorantim.</p>
            </div>
          </div>
        </div>
      </section>

  
      <section id="projeto" className="py-5">
        <div className="container">
            <h2 className="text-center">Principais Projetos</h2>
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title text-center">Recycle Hub</h5>
                            <p className="card-text"></p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        {/* <Image src="https://live.staticflickr.com/65535/52561898110_1de5af0c59.jpg" className="card-img-top img-fluid" alt="Projeto Compras" /> */}
                        <div className="card-body">
                            <h5 className="card-title text-center">Projeto Compras</h5>
                            <p className="card-text">teste</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

  
  <section id="projetos" className="py-5 bg-light">
    <div className="container">
      <h2 className="text-center mb-4">Demais projetos</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            {/* <Image src="projeto1.jpg" className="card-img-top" alt="Projeto 1" /> */}
            <div className="card-body">
              <h5 className="card-title">Projeto 1</h5>
              <p className="card-text">Descrição do projeto 1.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            {/* <Image src="projeto2.jpg" className="card-img-top" alt="Projeto 2" /> */}
            <div className="card-body">
              <h5 className="card-title">Projeto 2</h5>
              <p className="card-text">Descrição do projeto 2.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            {/* <Image src="projeto3.jpg" className="card-img-top" alt="Projeto 3"/> */}
            <div className="card-body">
              <h5 className="card-title">Projeto 3</h5>
              <p className="card-text">Descrição do projeto 3.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  
  <section id="redes" className="py-5">
    <div className="container">
      <h2 className="text-center mb-4">Minhas Redes Sociais</h2>
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
            
          <a className="nav-link" aria-current="page" href="https://github.com/Felipe-Thiago"><i className="fab fa-github"></i> GitHub</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://www.linkedin.com/in/felipe-thiago-779797219/"><i className="fab fa-linkedin"></i> Linkedin</a>
        </li>
      </ul>
    </div>
  </section>

  
  <footer className="bg-dark text-white text-center py-3">
    <p>&copy; 2025 Meu Portfólio. Todos os direitos reservados.</p>
  </footer>

  
  
    </div>
    
    
  );
}
