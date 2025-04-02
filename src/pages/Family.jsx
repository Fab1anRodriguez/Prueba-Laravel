import Roles from '../elements/roles.jsx';
import Tittle from "../elements/Titulo";

const Family = () => {
    return (
        <div className="page-container">
            <div className="container">
                <div className="content-wrapper">
                    <Tittle text="Roles" />
                    <div className="content-section">
                        <p className="content-text">
                            Cada jugador controla un campeón, un personaje con habilidades únicas que puede cumplir diferentes Roles en el equipo, como:
                        </p>
                        <div className="row g-4">
                            <div className="col-md-4">
                                <Roles 
                                    emoji="🛡️" 
                                    nombre="Tanque" 
                                    descripcion="Campeones que aguantan mucho daño y protegen a su equipo."
                                    imagen="https://static1-es.millenium.gg/articles/9/52/53/9/@/292386-ornn-1-orig-1-article_image_bd-1.jpg"/>
                            </div>
                            <div className="col-md-4">
                                <Roles 
                                    emoji="⚔️" 
                                    nombre="Luchador" 
                                    descripcion="Campeones que combinan daño y resistencia."
                                    imagen="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Irelia_0.jpg"/>
                            </div>
                            <div className="col-md-4">
                                <Roles 
                                    emoji="🏹" 
                                    nombre="Tirador" 
                                    descripcion="Campeones que infligen daño a distancia."
                                    imagen="https://esports.as.com/2019/05/17/league-of-legends/Caitlyn_1246085415_159093_1024x576.jpg"/>
                            </div>
                            <div className="col-md-4">
                                <Roles 
                                    emoji="🪄" 
                                    nombre="Mago" 
                                    descripcion="Campeones que infligen daño mágico a distancia."
                                    imagen="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_0.jpg"/>
                            </div>
                            <div className="col-md-4">
                                <Roles 
                                    emoji="🧙‍♂️" 
                                    nombre="Asesino" 
                                    descripcion="Campeones que infligen daño explosivo y buscan eliminar enemigos."
                                    imagen="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_0.jpg"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Family;
