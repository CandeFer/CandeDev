import './Experiencia.css'
import { useContext } from 'react';
import { Contexto } from '../../Context/context'
const Experiencia = () => {

    const { infor } = useContext(Contexto)

    const { Experiencia } = infor

    return (
        <section className="experiencia" id='Experiencia'>
            <h1>Experiencia</h1>
            <div className="experiencia-container">
                {
                    Experiencia.map((info) => (
                        <div className="item-experiencia" key={info.id}>
                            <div className='experiencia-text'>
                                <h3>{info.titulo}</h3>
                                <h5>{info.subtitulo}</h5>
                                <p>{info.descripcion}</p>
                            </div>
                        </div>
                    ))
                }
            </div>


        </section>
    );
};

export default Experiencia;