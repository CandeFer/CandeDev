/* eslint-disable no-undef */
import Pincel from '../../assets/Iconos/paint.svg'
import Dev from '../../assets/Iconos/dev.svg'
import DiseñoWeb from '../../assets/Iconos/DiseñoWeb.svg'
import { Contexto } from '../../Context/context'
import { useContext, useState } from 'react'
import './opciones.css'
import info from '../../Info/Info.json'

const Opciones = () => {

    const [active, setActive] = useState(info.DW)

    const { updateContexto } = useContext(Contexto);

    const change = (archivo) => {
        updateContexto(archivo)
        setActive(archivo)
    }




    return (
        <div className="opciones">

            <div className={`opcion ${active === info.DG ? 'opcion-active' : ''}`}
                onClick={() => change(info.DG)} >
                <div className='opcion-contenido'>
                    <img src={Pincel} alt="Icono" />
                    <h3>Dis. Gráfico</h3>
                </div>

            </div>

            <div className={`opcion ${active === info.DW ? 'opcion-active' : ''}`}
                onClick={() => change(info.DW)}>
                <div className='opcion-contenido'>
                    <img src={Dev} alt="Icono" />
                    <h3>Des. Web</h3>
                </div>
            </div>

            <div className={`opcion ${active === info.DiW ? 'opcion-active' : ''}`}
                onClick={() => change(info.DiW)}>
                <div className='opcion-contenido'>
                    <img src={DiseñoWeb} alt="Icono" />
                    <h3>Dis. Web</h3>
                </div>
            </div>

        </div>
    );
};

export default Opciones;




