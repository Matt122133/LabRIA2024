import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";

export const ModifyAccount = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(user));
    setPopupMessage("Informacion actualizada correctamente!");
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };
  return (
    <>
      <form className="form-modify-account" onSubmit={handleSubmit}>
        <h1>Modificar Informacion de Usuario</h1>
        <input
          type="text"
          name="firstName"
          value={user.firstName}
          onChange={handleChange}
          placeholder="First Name"
          required
        />
        <input
          type="text"
          name="lastName"
          value={user.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          required
        />
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <Button
          type="submit"
          sx={{
            backgroundColor: "#007bff",
            color: "white",
            width: "100%",
            "&:active": {
              background: "#007bff",
            },
            "&:hover": {
              background: "#007bff",
            },
          }}
        >
          Save Changes
        </Button>
      </form>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>{popupMessage}</p>
            <Button
              onClick={closePopup}
              sx={{
                backgroundColor: "#007bff",
                color: "white",
                width: "100%",
                "&:active": {
                  background: "#007bff",
                },
                "&:hover": {
                  background: "#007bff",
                },
              }}
            >
              Cerrar
            </Button>
          </div>
        </div>
      )}
    </>
  );
};
