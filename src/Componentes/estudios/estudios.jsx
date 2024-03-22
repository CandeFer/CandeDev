/* eslint-disable react-refresh/only-export-components */

import CardE from "./CardE";
import Opciones from "../opciones/opciones";
import './estudios.css'

const Estudio = () => {
    return (
        <section className="Estudios" id="Estudios">
            <h1>Estudios</h1>
            <Opciones/>
            <div className="infoE">
            <CardE/>
            </div>
        </section>
    );
};

export default Estudio;