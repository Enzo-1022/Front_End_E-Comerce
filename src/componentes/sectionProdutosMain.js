var produtos;

var imgEs = "https://http2.mlstatic.com/D_NQ_NP_926348-MLB46306672293_062021-O.webp";

try {

    produtos = await fetch(`http://localhost:3000/produtos`,{
        mode: 'cors'
    }).then( res => res.json());

} catch (error) {
    console.log(error);
    produtos = error;   
}

export default function Section() {
    return (
        produtos.map( (element) => {
            return(
                <section>
                    <div>
                        <img src={imgEs}/>
                        <h3>{element.Nome_Produto}</h3>
                        <p>{element.Descricao_Produto}</p>
                    </div>
                </section>
            )
        })
    )  
}