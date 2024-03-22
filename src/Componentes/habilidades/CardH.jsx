import { Contexto } from '../../Context/context'
import { useContext} from 'react'



const CardH = () => {

    const { infor } = useContext(Contexto)

    const { Habilidades } = infor

    return (
                    Habilidades.map((habi) => (
                        <div className="CardH" key={habi.id}>
                            <div className="CardH-text">
                                <h4>{habi.porcentaje}</h4>
                                <p>{habi.nombre}</p>
                            </div>
                        </div>
                    ))
    );
};

export default CardH;