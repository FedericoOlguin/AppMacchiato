import React, { useState } from "react";
import "../Styles/Form.css";


const Form = () => {
  const [inputNombre, cambiarInputNombre] = useState("");
  const [inputCorreo, cambiarInputCorreo] = useState("");

  // Funcion que se encargara de validar los datos y enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Comprobamos validacion del formulario ...
    // Si todo es correcto enviamos el formulario

    console.log("Formulario Enviado!");
  };

  // Funcion que se encarga de cambiar el estado del inputNombre
  const handleInputNombre = (e) => {
    cambiarInputNombre(e.target.value);
  };

  // Funcion que se encarga de cambiar el estado del inputCorreo
  const handleInputCorreo = (e) => {
    cambiarInputCorreo(e.target.value);
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit} className="formulario">
       
        
        <div>
          <label htmlFor="nombre">Name</label>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            id="nombre"
            value={inputNombre}
            onChange={handleInputNombre}
          />
        </div>

        <div>
          <label htmlFor="correo">Email</label>
          <input
            type="text"
            name="correo"
            placeholder="Correo"
            id="correo"
            value={inputCorreo}
            onChange={handleInputCorreo}
          />
        </div>

        <button type="submit">Send</button>
      </form>
    </>
  );
};

export default Form;
