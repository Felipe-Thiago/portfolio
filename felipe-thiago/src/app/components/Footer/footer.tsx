import Image from "next/image";

const Footer = () => {

    return (
        <footer className="text-white py-4 bg-blue-600">
            <div className="flex flex-wrap items-center justify-items-center">
                <p className="flex-3/4 mx-5">&copy; 2025 Felipe Thiago | Fatec Votorantim. Todos os direitos reservados.</p>
                <div className="flex-auto">
                    <Image src={"/images/fatec-votorantim.png"} width={200} height={200} alt="Logo Fatec" className="mx-5"/> 
                </div>
                
            </div>
            
        </footer>
    )
}

export default Footer;