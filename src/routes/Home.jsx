import { HomeStyle } from "../css/HomeStyle"

const Home = () => {
    return(
        <HomeStyle>
            <section className="home">
                <div className="conteiner-1">
                    <div className="conteiner-esquerda">
                    <img src="src/assets/justdoit.jpeg" alt="" />
                    </div>
                    <div className="conteiner-direita">
                        <p>O esporte desempenha um papel fundamental na vida das pessoas, promovendo saúde física e mental. Ele ajuda a desenvolver disciplina, autoconfiança e espírito de equipe, além de ser uma excelente forma de aliviar o estresse do dia a dia. A prática regular de atividades físicas também melhora a qualidade de vida, previne doenças e fortalece o corpo. Além disso, o esporte une pessoas, cria conexões e incentiva um estilo de vida equilibrado e ativo, impactando positivamente o bem-estar em todas as idades.</p>
                    </div>
                </div>
                <div className="conteiner-2">
                    <div className="conteiner-esquerda">
                        <p>O esporte impacta fortemente a mídia, atraindo milhões de espectadores e gerando receitas significativas em eventos como Olimpíadas e Copas do Mundo. Ele impulsiona a criação de conteúdos variados e destaca atletas como ícones culturais, influenciando discussões sociais e econômicas, tornando-se central na mídia moderna.</p>
                    </div>
                    <div className="conteiner-direita">
                        <img src="src/assets/kobe.jpeg" alt="" />
                    </div>
                </div>
                <div className="conteiner-3">
                    <div className="conteiner-esquerda">
                        <img src="src/assets/basquete.jpeg" alt="" />
                    </div>
                    <div className="conteiner-direita">
                        <p>O uso de acessórios e roupas de alta qualidade no esporte é essencial para garantir desempenho, conforto e segurança. Equipamentos adequados ajudam a prevenir lesões, oferecem suporte aos movimentos corretos e permitem melhor respirabilidade e controle de temperatura durante atividades intensas. Além disso, roupas técnicas melhoram a mobilidade e a resistência, proporcionando uma experiência esportiva mais eficiente e agradável. Investir em materiais de qualidade pode fazer toda a diferença na performance e no bem-estar do atleta, seja ele amador ou profissional.</p>
                    </div>
                </div>
            </section>
        </HomeStyle>
    )
}

export default Home