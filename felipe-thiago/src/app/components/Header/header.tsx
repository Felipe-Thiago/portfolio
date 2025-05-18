
const Header = () => {

    return(
    <nav className="top-0 right-0 left-0 bg-blue-600 flex flex-wrap md:place-content-between justify-center text-xl cursor-default select-none">
        <span className="p-5 md:ml-10 text-3xl"><a href="#inicio">&lt;Felipe/&gt;</a></span>
        <ul className="flex flex-wrap place-content-end">
          <a href="#sobre"><li className="p-5 hover:font-bold">Sobre</li></a>
          <a href="#projetos"><li className="p-5 hover:font-bold">Projetos</li></a>
          <a href="#redes"><li className="p-5 hover:font-bold">Contato</li></a>
        </ul>
      </nav>
    )
}

export default Header;