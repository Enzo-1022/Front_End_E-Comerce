// Impotando Os componentes criados para usarmos
import Header from "../componentes/Header/index";
import NavBar from "../componentes/Nav/index";
import Section from "../componentes/SectionProdutosMain/index";
import Footer from "../componentes/footer";

// Importando o arquivo css
import "../App.css";

export default function HomePage() {
    return(
        <>
            <Header />
            <NavBar />
            <Section />
            <Footer />
        </>
    )
}