import { Link } from "react-router-dom"
import { NavStyle } from "../css/NavStyle"


const Nav = () => {
    return(
        <>
            <NavStyle>
                <header>
                <div>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/login'}>Login</Link>
                    <Link to={'/produtos'}>Produtos</Link>
                </div>
                </header>
            </NavStyle>
        </>
    )
}

export default Nav