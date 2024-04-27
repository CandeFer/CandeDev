import { Contexto } from '../../Context/context'
import { useContext } from 'react'


const CardE = () => {

    const { infor } = useContext(Contexto)

    const { Estudios } = infor

    return (
        <div className="infoE">
            {
                Estudios.map((info) => (
                    <div className="CardE" key={info.id}>
                        <div className="CardE-text">
                            <h3>{info.titulo}</h3>
                            <p>{info.descripcion}</p>
                        </div>
                    </div>
                    
                ))
            }

        </div>
    );
}

export default CardE;
