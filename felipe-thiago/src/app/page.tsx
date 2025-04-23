
export default function Home() {
  return (
    <div>
      <nav className="bg-blue-500 grid grid-cols-10 gap-4">
      <ul className="inline-flex space-x-15 col-start-7 col-end-10">
        <li className="">Início</li>
        <li>Projeto</li>
        <li>Contato</li>
      </ul>
    </nav>
      <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    


    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">Felipe Thiago</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#sobre">Sobre</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#habilidades">Habilidades</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projetos">Projetos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contato">Contato</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  <section id="sobre" className="py-5 bg-light">
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
    </div>
    
  );
}
