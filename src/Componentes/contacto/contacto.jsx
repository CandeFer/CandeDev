/* eslint-disable react-refresh/only-export-components */

import Formulario from "../Formulario/Formulario";
import './contacto.css'


const Contacto = () => {
    return (
        <section id="Contacto" >
            <h1>Contacto</h1>
            <p className="parrafo-contacto">Si queres comunicarte conmigo, para aportaciones, dudas o proyectos, no dudes en contactarme.</p>
            <Formulario />
        </section>


    );
};

export default Contacto;