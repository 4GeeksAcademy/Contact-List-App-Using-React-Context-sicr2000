import React, { useContext, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const NewContact = () => {
  const { actions } = useContext(Context);
  const navigate = useNavigate();
  const [selectedContact, setSelectedContact] = useState({
    full_name: "",
    email: "",
    phone: "",
    address: "",
  });
  const { id } = useParams();
  const isEdit = id !== undefined;

  return (
    <div className="mx-5">
      <h1>{isEdit ? "Editar Contacto" : "Nuevo Contacto"}</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (isEdit) {
            actions.editContact({
              ...selectedContact,
              id: id,
            });
          } else {
            actions.addContact(selectedContact);
          }
          navigate("/");
        }}
      >
        <div className="my-3">
          <label>Nombre</label>
          <input
            className="w-100"
            type="text"
            placeholder="Nombre y Apellido"
            required
            onChange={(e) => {
              setSelectedContact({
                ...selectedContact,
                full_name: e.target.value,
              });
            }}
          />
        </div>

        <div className="my-3">
          <label>Email</label>
          <input
            className="w-100"
            type="email"
            placeholder="Correo Electrónico"
            required
            onChange={(e) => {
              setSelectedContact({
                ...selectedContact,
                email: e.target.value,
              });
            }}
          />
        </div>

        <div className="my-3">
          <label>Teléfono</label>
          <input
            className="w-100"
            type="number"
            placeholder="Número Telefónico"
            required
            onChange={(e) => {
              setSelectedContact({
                ...selectedContact,
                phone: e.target.value,
              });
            }}
          />
        </div>

        <div className="my-3">
          <label>Dirección</label>
          <input
            className="w-100"
            type="text"
            placeholder="Dirección"
            required
            onChange={(e) => {
              setSelectedContact({
                ...selectedContact,
                address: e.target.value,
              });
            }}
          />
        </div>

        <button className="btn btn-primary w-100 fw-bold">Guardar</button>
      </form>
      <Link to="/">Volver</Link>
    </div>
  );
};
