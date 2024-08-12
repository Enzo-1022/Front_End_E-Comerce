// var produtos = await fetch(`http://localhost:3000/produtos`);
 const produtos = [
    {
        id: 1,
        nome: "turbina ap"   
    },
    {
        id: 2,
        nome: "Turbina Stage 2 up Tsi"
    }
 ];


export default function Section() {

    var produtos2 = produtos.map( produto => <div> <h1> {produto.nome} </h1> </div>)

    return(
        <section class="sectionProdutos">
            {produtos2}
        </section>
    )
}