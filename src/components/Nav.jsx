import { Link } from "react-router-dom"
import { NavStyle } from "../css/NavStyle"


const Nav = () => {
    return(
        <>
            <NavStyle>
                    <header>
                        <div className="logo">
                        </div>
                        <div className="links">
                            <Link to={'/'} className="caminhos">Home</Link>
                            <Link to={'/produtos'} className="caminhos">Produtos</Link>
                            <Link to={'/sobre'} className="caminhos">Sobre</Link>
                            <Link to={'/contato'} className="caminhos">Contato</Link>
                            <Link to={'/login'} className="caminhos">Login</Link>
                        </div>
                    </header>
            </NavStyle>
        </>
    )
}

export default Nav