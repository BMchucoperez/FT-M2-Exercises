import React from 'react'
import './Contact.modules.css'

// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export const validate = (inputs) => {
  let errors = {};
  
  if(!inputs.name){
    errors.name = 'Se requiere un nombre';
  }
  if (!regexEmail.test(inputs.email)) {
    errors.email = 'Debe ser un correo electrónico';
  }
  if(!inputs.message){
    errors.message = 'Se requiere un mensaje';
  }

 return errors;

}

export default function Contact () {

  const handleSubmit = (evento) => {
    evento.preventDefault();
    if(Object.values(errors).length === 0){
      alert("Datos completos")
      setInputs({
        name: '',
        email: '',
        message: ''
      })
      setErrors({
        name: '',
        email: '',
        message: ''
      })
    }
    else{
      alert("Debe llenar todos los campos")
    }
  }

  const [inputs, setInputs] = React.useState({
    name: '',
    email: '',
    message: ''
 });

  const [errors, setErrors] = React.useState({
  name: '',
  email: '',
  message: ''
});

const handleChange = (evento) => {
  setInputs({
    ...inputs,
    [evento.target.name]: evento.target.value
  })

  setErrors(
    validate({
       ...inputs,
       [evento.target.name]: evento.target.value,
    })
 )
}

  return(
    <form onSubmit={handleSubmit} >
      <label htmlFor="nombre">Nombre:</label>
      <input type="text"
      className={errors.name && "warning"}
      name="name"
      placeholder='Escribe tu nombre...'
      value={inputs.name}
      onChange={handleChange}
      autocomplete="off" />
      {errors.name !== '' ? <p className='danger'>{errors.name}</p> : ''}
      <hr />
      
      <label htmlFor="email">Correo Electrónico:</label>
      <input type="text" 
      className={errors.email && "warning"}
      name="email"
      placeholder='Escribe tu email...'
      value={inputs.email}
      onChange={handleChange}
      autocomplete="off" />
      {errors.email !== '' ? <p className='danger'>{errors.email}</p> : ''}
      <hr />
      
      <label htmlFor="message">Mensaje:</label>
      <textarea name="message"
      className={errors.message && "warning"} 
      placeholder="Escribe tu mensaje..." 
      type="text"
      value={inputs.message}
      onChange={handleChange}
      cols="30" rows="10"></textarea>
      {errors.message !== '' ? <p className='danger'>{errors.message}</p> : ''}
      <hr />
      <button type="submit" >Enviar</button>
    </form>
  ) 
}
