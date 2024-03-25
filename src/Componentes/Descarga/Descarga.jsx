import './Descarga.css'
import  CV  from "../../../public/CV.pdf"

const Descarga = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = CV ;
    link.download = 'Candela Fernandez CV';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button onClick={handleDownload}>
      Descargar CV
    </button>
  );
};

export default Descarga;
