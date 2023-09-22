import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faEnvelope,
  faLocationDot,
  faPencil,
  faPhone,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

export const Contact = ({ full_name, address, phone, email, id }) => {
  const { actions } = useContext(Context);

  return (
    <div className="border row rounded-3 p-3 m-4">
      <div className="col-3 d-flex justify-content-center align-items-center">
        <FontAwesomeIcon
          icon={faCircleUser}
          style={{ width: "128px", height: "128px" }}
        />
      </div>
      <div className="col-8 d-flex flex-column">
        <p className="fs-3">{full_name}</p>
        <p>
          <FontAwesomeIcon icon={faLocationDot} />
          &nbsp; &nbsp; &nbsp;
          {address}
        </p>
        <p>
          <FontAwesomeIcon icon={faPhone} />
          &nbsp; &nbsp;
          {phone}
        </p>
        <p>
          <FontAwesomeIcon icon={faEnvelope} />
          &nbsp; &nbsp;
          {email}
        </p>
      </div>
      {/* options */}
      <div className="col-1 d-flex justify-content-center">
        <Link to={`/edit-contact/${id}`}>
          <FontAwesomeIcon icon={faPencil} />
        </Link>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <a href="#" onClick={(event) => {
            event.preventDefault();
            actions.deleteContact(id);
        }}>
          <FontAwesomeIcon icon={faTrash} />
        </a>
      </div>
    </div>
  );
};
