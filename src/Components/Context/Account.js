// import Contact from "./Contact";
// import CreateAccount  from "./CreateAccount";
import Login from "./Login";
import React from "react";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../Contexts/AuthContext";

export default function Account () {
   return (
    <AuthProvider>
    <Container className="d-flex align-items-center justify-content-center" style ={{minHeight: "100vh"}}>

        <div className="w-100" style={{maxWidth: "400px"}}>
        <Login/>
        </div>

    </Container>
    </AuthProvider>
   )
}