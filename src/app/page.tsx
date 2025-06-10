import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Sobre from "./components/Sobre/sobre";
import Experiencia from "./components/Experiencia/experiencia";
import Projetos from "./components/Projetos/projetos";
export default function Home() {

  return (
    <div id="main" className="grid font-[family-name:var(--font-geist-sans)]">
      <Header />

      <Sobre />
  
      <Experiencia />

      <Projetos />

      <Footer />
  
    </div>
    
  );
}
