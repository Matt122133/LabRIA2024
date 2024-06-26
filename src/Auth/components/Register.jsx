import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { useAuth } from "../context/AuthContext";

export const Register = () => {
  const router = useNavigate();
  const { login } = useAuth();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    birthday: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
    };
    localStorage.setItem("user", JSON.stringify(userData));
    login(userData);
    router("/");
  };

  return (
    <form className="form-register" onSubmit={handleSubmit}>
      <h1>Register</h1>
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
        type="date"
        name="birthday"
        value={user.birthday}
        onChange={handleChange}
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
        Register
      </Button>
    </form>
  );
};
