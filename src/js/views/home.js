import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Contact } from "../component/contactCard";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  if (store.contacts.length === 0)
    return (
      <>
        <div className="ml-auto d-flex justify-content-end">
          <Link to="/new-contact">
            <button className="btn btn-primary mx-5 fs-5 p-2">
              Agregar Contacto
            </button>
          </Link>
        </div>
        <h2 className="h2 text-center">No hay contactos</h2>
      </>
    );

  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-end">
          <Link to="/new-contact">
            <button className="btn btn-primary mx-4 fs-5 p-2">
              Agregar Contacto
            </button>
          </Link>
        </div>
        {store.contacts.map((contact, index) => (
          <Contact
            full_name={contact.full_name}
            address={contact.address}
            phone={contact.phone}
            email={contact.email}
            id={contact.id}
            key={index + 1}
          />
        ))}
      </div>
    </>
  );
};
