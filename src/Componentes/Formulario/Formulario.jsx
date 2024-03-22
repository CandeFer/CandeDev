import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Formulario.css';

export const Formulario = () => {
  const serviceID = 'email_Portfolio';
  const templateID = 'template_Portfolio';
  const publicKey = 'gMD-acKc7-3w-LUQ7';

  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(serviceID, templateID, form.current, publicKey);
      console.log('SUCCESS!');
      setFormData({
        user_name: '',
        user_email: '',
        message: ''
      });
    } catch (error) {
      console.error('FAILED...', error);
    }
  };

  return (
    <form className='formulario' ref={form} onSubmit={sendEmail}>
      <label htmlFor="user_name">Nombre</label>
      <input type="text" id="user_name" name="user_name" value={formData.user_name} onChange={handleChange}/>
      <label htmlFor="user_email">Email</label>
      <input type="email" id="user_email" name="user_email" value={formData.user_email} onChange={handleChange} />
      <label htmlFor="message">Mensaje</label>
      <textarea id="message" name="message" value={formData.message} onChange={handleChange} />
      <input type="submit" value="Enviar" />
    </form>
  );
};

export default Formulario;
