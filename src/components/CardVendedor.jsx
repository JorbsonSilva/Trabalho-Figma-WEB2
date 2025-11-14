const CardVendedor = ({vendedorData}) =>{
    const {nome, localizacao, rating, descricao, pedido, fundada} = vendedorData;
    return ( <><div className="card vendedor"></div>
    <div className="card media"></div>
    <div className="card content">
        <h3>{nome}</h3>
        <h2>{localizacao}</h2>
        <h2>{rating}</h2>
        <h2>{descricao}</h2>
        <h2>{pedido}</h2>
        <h2>{fundada}</h2>
        
    </div></>
    




    );

       

};

export default CardVendedor; 
