import { servicios } from '../Lista/Lista';


const CardS = () => {
    return (
                servicios.map((ser) => (
                    <div className="CardS" key={ser.id}>
                        <div className="CardS-text">
                            <h3>{ser.titulo}</h3>
                            <p>{ser.des}</p>
                            <button type="button">Contactarme</button>
                        </div>
                    </div>
                ))
       
    );
};

export default CardS;