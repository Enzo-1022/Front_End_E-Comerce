// Importando o botao
import BotaoAddCarrinho from '../botaoAdcCarrinho/index'

// Variaveis usadas para exibir os produtos
var produtos;

var arrayDeDivDeProdutos = [], matriz = [], vetorAuxiliar = [];

var contador = 0;

var imgEs = "https://http2.mlstatic.com/D_NQ_NP_926348-MLB46306672293_062021-O.webp";

// try {

//     produtos = await fetch(`http://localhost:3000/produtos`,{
//         mode: 'cors'
//     }).then( res => res.json());

// } catch (error) {
//     console.log(error);
//     produtos = error;   
// }

produtos = [
    {Nome_Produto: "teste", Descricao_Produto: "Testando"},
    {Nome_Produto: "teste", Descricao_Produto: "Testando"}
];

produtos.map( (element) => { // o metodo map executa a função que esta nele para cada item da array, e nos estamos retornando cada elemento que veio da nossa api com toda a formatação html para serem exibidos
    return arrayDeDivDeProdutos.push(
        <div className='boxProdutos'>
            <img src={imgEs} alt="Turbina" className='imgProduto'/>
            <h3>{element.Nome_Produto}</h3>
            <p>{element.Descricao_Produto}</p>
            <BotaoAddCarrinho/>
        </div>
    )
})

// Resolvi o bug basicamente fiz tudo dnv, Esse for itera sobre a array de elementos jsx com todos os produtos cadastrados no banco e, faz uma matriz com 3 colunas para que possamos exibir em modo de matriz na tela
for(var key of arrayDeDivDeProdutos) {

    vetorAuxiliar.push(key);

    contador++

    if (vetorAuxiliar.length ===  3 || contador === arrayDeDivDeProdutos.length) {
        
        matriz.push(vetorAuxiliar);

        vetorAuxiliar = []
    }
}

    
export default function Section(){ // essa função retorna nosso componente react.
    return(
        <section className="sectionProdutos">
            {
                matriz.map( (element)=> {
                        return(
                            <div className="containerProdutos">
                                {element}
                            </div>
                        )
                    } 
                )
            }
        </section>
    )
}
