import { useRef } from "react"
import Perfil from "./Perfil.jsx"

const Login = () => {

    const usuario = useRef();
    const senha = useRef();

    const getUsuario = sessionStorage.getItem("usuario");
    const getSenha = sessionStorage.getItem("senha");

    const handleLogin = () => {
        if (usuario.current.value == "Felipe Men" && senha.current.value == "123456")
        {
            let token =
            Math.random().toString(16).substring(2) +
            Math.random().toString(16).substring(2);
            

            sessionStorage.setItem("usuario", "Felipe Men");
            sessionStorage.setItem("senha", token);
        } else
        {
            alert("Usuário ou Senha inválidos!")
        }
    }

    return(
        <>
            <section>

            { getUsuario && getSenha ? (
                <Perfil/>
            ):
                <form onSubmit={handleLogin}>
                    <label htmlFor="usuario">Usuário:</label><br/>
                    <input type="text" placeholder="Digite seu usuário..." id="usuario" ref={usuario}/> <br/>
                    <label htmlFor="senha">Senha:</label><br/>
                    <input type="password" placeholder="Digite sua senha..." id="senha" ref={senha}/> <br/>
                    <button type="submit">Logar</button>
                </form>
            }
            </section>
        </>
    )
}

export default Login