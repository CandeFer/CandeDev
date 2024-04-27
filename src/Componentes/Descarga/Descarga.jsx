import './Descarga.css'
import  CV  from "../../../public/CV.pdf"

const Descarga = () => {
 
  return (
    <button >
      <a href={CV} download="CV Candela Fernandez"> Descargar CV</a>
    </button>
  );
};

export default Descarga;
