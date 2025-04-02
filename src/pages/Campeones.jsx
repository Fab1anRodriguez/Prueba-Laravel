import React from 'react';
import Campeon from '../elements/campeon';
import Tittle from "../elements/Titulo";

const Campeones = () => {
    return (
        <div className="page-container">
            <div className="container">
                <div className="content-wrapper">
                    <Tittle text="Campeones" />
                    <div className="content-section">
                        <p className="content-text">
                            En League of Legends, los campeones son personajes jugables que los jugadores 
                            controlan durante las partidas. Cada campeón tiene habilidades únicas y 
                            desempeña un papel específico en el juego.
                        </p>
                        <div className="row g-4">
                            <div className="col-md-4">
                                <Campeon 
                                    nombre="Garen" 
                                    imagen="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Garen_0.jpg" 
                                    descripcion="Un guerrero fuerte y resistente." 
                                />
                            </div>
                            <div className="col-md-4">
                                <Campeon 
                                    nombre="Lux" 
                                    imagen="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_0.jpg" 
                                    descripcion="Una maga de luz con habilidades de control." 
                                />
                            </div>
                            <div className="col-md-4">
                                <Campeon 
                                    nombre="Zed" 
                                    imagen="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_0.jpg" 
                                    descripcion="Un asesino ágil y mortal." 
                                />
                            </div>
                            <div className="col-md-4">
                                <Campeon 
                                    nombre="Jinx" 
                                    imagen="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jinx_0.jpg" 
                                    descripcion="Una tiradora caótica y explosiva." />
                            </div>
                            <div className="col-md-4">
                                <Campeon 
                                    nombre="Thresh" 
                                    imagen="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Thresh_0.jpg" 
                                    descripcion="Un soporte con habilidades de control." />
                            </div>
                            <div className="col-md-4">
                                <Campeon 
                                    nombre="Ahri" 
                                    imagen="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg" 
                                    descripcion="Una maga con habilidades de movilidad." />
                            </div>
                            <div className="col-md-4">
                                <Campeon 
                                    nombre="Riven" 
                                    imagen="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Riven_0.jpg" 
                                    descripcion="Una guerrera con habilidades de daño explosivo." />
                            </div>
                            <div className="col-md-4">
                                <Campeon 
                                    nombre="Katarina" 
                                    imagen="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Katarina_0.jpg" 
                                    descripcion="Una asesina con habilidades de área." />
                            </div>
                            <div className="col-md-4">
                                <Campeon 
                                    nombre="Rengar" 
                                    imagen="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rengar_0.jpg" 
                                    descripcion="Una asesina con habilidades de área." />
                            </div>
                            <div className="col-md-4">
                                <Campeon 
                                    nombre="Kennen" 
                                    imagen="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kennen_0.jpg" 
                                    descripcion="Un luchador veloz y eléctrico." />
                            </div>
                            <div className="col-md-4">
                                <Campeon 
                                    nombre="Nasus" 
                                    imagen="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nasus_0.jpg" 
                                    descripcion="Un tanque con habilidades de escalado." />
                            </div>
                            <div className="col-md-4">
                                <Campeon 
                                    nombre="Akali" 
                                    imagen="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_0.jpg" 
                                    descripcion="Asesina con poderes magicos y veloz" />
                            </div>
                            <div className="col-md-4">
                                <Campeon 
                                    nombre="Darius" 
                                    imagen="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_0.jpg" 
                                    descripcion="Un guerrero fuerte y resistente." />
                            </div>
                            <div className="col-md-4">
                                <Campeon 
                                    nombre="Leona" 
                                    imagen="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Leona_0.jpg" 
                                    descripcion="Una guerrera con habilidades de control." />
                            </div>
                            <div className="col-md-4">
                                <Campeon 
                                    nombre="Sona" 
                                    imagen="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sona_0.jpg" 
                                    descripcion="Una soporte con habilidades de curación." />
                            </div>
                            <div className="col-md-4">
                                <Campeon 
                                    nombre="Yasuo" 
                                    imagen="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg" 
                                    descripcion="Un espadachín ágil y mortal." />
                            </div>
                            <div className="col-md-4">
                                <Campeon 
                                    nombre="Fiora" 
                                    imagen="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Fiora_0.jpg" 
                                    descripcion="Una duelista con habilidades de daño explosivo." />
                            </div>
                            <div className="col-md-4">
                                <Campeon 
                                    nombre="Jhin" 
                                    imagen="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jhin_0.jpg" 
                                    descripcion="Un tirador con habilidades de daño explosivo." />
                            </div>
                            <div className="col-md-4">
                                <Campeon 
                                    nombre="Vayne" 
                                    imagen="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Vayne_0.jpg" 
                                    descripcion="Una tiradora con habilidades de movilidad." />
                            </div>
                            <div className="col-md-4">
                                <Campeon 
                                    nombre="Zyra" 
                                    imagen="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zyra_0.jpg" 
                                    descripcion="Una maga con habilidades de control." />
                            </div>
                            <div className="col-md-4">
                                <Campeon 
                                    nombre="Rumble" 
                                    imagen="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rumble_0.jpg" 
                                    descripcion="Un luchador con habilidades de daño explosivo." />
                            </div>
                            <div className="col-md-4">
                                <Campeon 
                                    nombre="Kassadin" 
                                    imagen="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kassadin_0.jpg" 
                                    descripcion="Un mago con habilidades de movilidad." />
                            </div>
                            <div className="col-md-4">
                                <Campeon 
                                    nombre="Gragas" 
                                    imagen="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gragas_0.jpg" 
                                    descripcion="Un guerrero con habilidades de control." />
                            </div>
                            <div className="col-md-4">
                                <Campeon 
                                    nombre="Rakan" 
                                    imagen="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rakan_0.jpg" 
                                    descripcion="Un soporte con habilidades de control." />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Campeones;