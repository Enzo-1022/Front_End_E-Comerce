var produtos;

var arrayDeDivDeProdutos = [];

var matriz = [];

var contador = 1;

var junta = [];

var controlador = 3;

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
    {Nome_Produto: "teste", Descricao_Produto: "Testando"},
    {Nome_Produto: "teste", Descricao_Produto: "Testando"},
    {Nome_Produto: "teste", Descricao_Produto: "Testando"},
    {Nome_Produto: "teste", Descricao_Produto: "Testando"},
    {Nome_Produto: "teste", Descricao_Produto: "Testando"},
];

produtos.map( (element) => {
    return arrayDeDivDeProdutos.push(
        <div>
            <img src={imgEs} alt="Turbina"/>
            <h3>{element.Nome_Produto}</h3>
            <p>{element.Descricao_Produto}</p>
        </div>
    )
})

// Falta resolver os bugs aqui, na minha logica devo depurar e saber como anda a varaivel de controle acho que o erro esta nela
for(var key = 0; key <= arrayDeDivDeProdutos.length; key++) {

    junta.push(arrayDeDivDeProdutos.shift());

    if (contador === controlador) {
        
        matriz.push(junta);

        junta = []

        if(arrayDeDivDeProdutos.length > 3){

            controlador += 3;

        }else{

            let contador2 = 0;

            while (contador2 <= arrayDeDivDeProdutos.length) {
                junta.push(arrayDeDivDeProdutos.shift());

                contador2++
            }

            matriz.push(junta);
        }
        
    }else if(arrayDeDivDeProdutos.length < 3 && contador == 2){
        matriz.push(junta);

        junta = []
    }else if(arrayDeDivDeProdutos.length < 2 && contador == 1){
        matriz.push(junta);

        junta = []
    }

    contador++
}

export default function Section(){
    return(
        <section className="sectionProdutos">
            {
                matriz.map( (element)=> {
                        return(
                            <div className="boxProdutos">
                                {element}
                            </div>
                        )
                    } 
                )
            }
        </section>
    )
}
