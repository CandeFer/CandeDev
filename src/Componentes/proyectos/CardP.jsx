import { Contexto } from '../../Context/context'
import { useContext} from 'react'




const CardP = () => {

    const { infor } = useContext(Contexto)

    const { Proyectos } = infor

    return (
                Proyectos.map((pro) => (
                    <div className='CardP' key={pro.id}>
                        <div className='CardP-text'>
                            <h3>{pro.nombre}</h3>
                            <p>{pro.herramientas}</p>
                            <a href={pro.enlace} target="_blank" rel="noopener noreferrer">
                            <button type="button">Repositorio</button>
                            </a>
                        </div>
                    </div>
                ))
    );
};

export default CardP;

