/* eslint-disable react/prop-types */
import Logo from '../../assets/Imagenes/CandeDev.svg';
import Menu from '../../assets/Iconos/bx-menu.svg';
import useScrollToElement from '../../Hooks/Scroll';

import { useState } from 'react';
import './navbar.css';

const Navbar = () => {

    const scrollToElement = useScrollToElement();

    const [lista, setLista] = useState('lista-active');




    const menuChange = () => {
        setLista(lista === 'lista-active' ? 'lista-inactive'  :'lista-active' );
    };


    return (
        <nav>
            <div onClick={menuChange} className='menu' >
                <img className='foto-menu' src={Menu} alt="menu" />
            </div>
            <ul className={lista}>
                <li onClick={() => scrollToElement("sobremi")}>Sobre mí</li>
                <li onClick={() => scrollToElement("Estudios")}>Estudios</li>
                <li onClick={() => scrollToElement("Habilidades")}>Habilidades</li>
                <li onClick={() => scrollToElement("Proyectos")}>Proyectos</li>
                <li onClick={() => scrollToElement("Experiencia")}>Experiencia</li>
                <li onClick={() => scrollToElement("Servicios")}>Servicios</li>
                <li onClick={() => scrollToElement("Contacto")}>Contacto</li>
            </ul>

            <div className='logo' >
                <img src={Logo} alt="Logo" />
            </div>
        
        </nav>
    );
};

export default Navbar;
