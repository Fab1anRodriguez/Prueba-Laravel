import Tittle from "../elements/Titulo";

const Home = () => {
    return (
        <div className="page-container">
            <div className="container">
                <div className="content-wrapper">
                    <Tittle text="Home" />
                    <div className="content-section">
                        <p className="content-text">
                            League of Legends (LoL) es un popular videojuego de estrategia y combate en línea 
                            del género MOBA (Multiplayer Online Battle Arena), desarrollado y publicado 
                            por Riot Games en 2009.
                        </p>
                        
                        <h2 className="section-title">🏆 ¿De qué trata el juego?</h2>
                        
                        <p className="content-text">
                            En LoL, dos equipos de cinco jugadores compiten en un mapa llamado 
                            La Grieta del Invocador, con el objetivo de destruir el Nexo enemigo 
                            (la estructura central en la base del equipo contrario).
                        </p>
                    </div>
                    <div className="images-grid">
                        <img 
                            src="https://img.odcdn.com.br/wp-content/uploads/2024/03/League-of-Legends.jpg" 
                            alt="Lolsito" 
                            className="content-image" 
                        />
                        <img 
                            src="https://i.blogs.es/1a6423/lol3/1366_2000.webp" 
                            alt="Lolsito 2" 
                            className="content-image"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;