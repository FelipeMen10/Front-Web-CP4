import { ContatoStyle } from "../css/ContatoStyle"

const Contato = () =>{


    return(
        <ContatoStyle>
        <section className="contato">
            <div className="contatos">
                <div>
                    <h4>Nos siga em nossas redes sociais:</h4>
                </div>
                <div className="redes-sociais">
                    <a href='https://www.linkedin.com' id="linkedin" className="logos">
                    <img src="src/assets/linkedin.png" alt="" />
                    </a>
                    <a href='https://www.instagram.com' id="instagram" className="logos">
                    <img src="src/assets/instagram.png" alt="" />
                    </a>
                    <a href='https://www.facebook.com' id="facebook" className="logos">
                    <img src="src/assets/facebook.png" alt="" />
                    </a>
                </div>
                <div className="email">
                    <h5>allstarsports@gmail.com</h5>
                    <h5>(11) 99573-5540</h5>
                </div>
            </div>
        </section>
        </ContatoStyle>
    )
}

export default Contato