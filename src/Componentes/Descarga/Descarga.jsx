import './Descarga.css'

const Descarga = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/CV.pdf'; 
    link.download = 'Candela fernandez cv'; 
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
