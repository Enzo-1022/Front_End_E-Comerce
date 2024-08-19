import imagemcarrinho from './carrinho-de-compras.png'

export default function BotaoAdicionarAoCarrinho() {
    return(
        <div className='boxBtns' onClick={()=>{alert('fds')}}>
            <span>Adicionar Ao Carrinho</span>
            <img alt="carrinho" src={imagemcarrinho}/>
        </div>
    )
}