import Button from "./Button";
import Image from "next/image";

const HeaderTop = () => {
    return (
        <div className="header-top-bar">
            <span>Caruaru - PE | (81)9 9876-5432</span>
        </div>
    )
};

const HeaderMain = () => {
    return (
        <div className="header-main-bar">
            <div className="logo"></div>
            <div className="barra-pesquisa"></div>
            <div className="Buttons-direita">
                <Button>
                    <Image src="/images/shopping-cart.svg" alt="carrinho de compras" width={15} height={15}/></Button>
                <Button>Entrar</Button>
                </div>

        </div>

    )
};

const HeaderNav = () =>{
    return(
        <div className="header-main-nav">
            <Button>Início</Button>
            <Button>Produto</Button>
            <Button>Vendedores</Button>
            <Button>Sobre</Button>
            <Button>Contato</Button>      

        </div>
    )
}

export default function Header () {
    return (
        <header className="header-container">
            <HeaderTop/>
            <HeaderMain/>
            <HeaderNav/>
        </header>

    )
}