import Github from '../../assets/Iconos/github.svg';
import HackerRank from '../../assets/Iconos/hacker.svg';
import Linkedin from '../../assets/Iconos/linkedin.svg';
import './sobremi.css';

const SobreMi = () => {
    return (
        <div className="sobre-mi" id='sobremi'>
            <div className="sobre-mi-text">
                <h1>Sobre mí</h1>
                <p>¡Hola y bienvenido a mi portfolio! Soy Candela, una apasionada
                    de la tecnología que fusiona la programación y el diseño para
                    ofrecer un servicio óptimo. Mi enfoque se orienta hacia la
                    transformación de ideas complejas en sitios web funcionales,
                    atractivos y eficaces.<br /> Si estás en busca de una combinación
                    única de funcionalidad y diseño, estoy lista para elevar tus
                    proyectos al siguiente nivel.
                </p>
            </div>
            <div className="sobre-mi-social-media">
                <a href="https://www.linkedin.com/in/candela-fernandez-ibañez" target="_blank" rel="noopener noreferrer">
                    <img src={Linkedin} alt="Linkedin" />
                </a>
                <a href="https://github.com/CandeFer" target="_blank" rel="noopener noreferrer">
                    <img src={Github} alt="Github" />
                </a>
                <a href="https://www.hackerrank.com/profile/candelafernaiba" target="_blank" rel="noopener noreferrer">
                    <img src={HackerRank} alt="HackerRank" />
                </a>
            </div>
        </div>
    );
};

export default SobreMi;
