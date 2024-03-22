import Foto from '../../assets/Imagenes/Foto.svg'
import Descarga from '../Descarga/Descarga'
import './portada.css'

const Portada = () => {
    return (
        <>
        <section className="portada">
            <div className="portada-text">
                <h1>Hola, soy Cande</h1>
                <p>Desarrolladora Full Stack</p>
                <p>Diseñadora UX/UI</p>
                <Descarga />
            </div>
            <div className='portada-image-container'>
                <img className='portada-foto' src={Foto} alt="Mi imagen" />
            </div>
        </section>
        </>
    )
}

export default Portada