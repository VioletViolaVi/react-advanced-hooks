import React from "react";
import { Routes, Route } from "react-router-dom";
import { useAuth } from "../../contexts"; // gives access to global state

export default function Home() {
    
    const {user}  = useAuth();
    return (
        <>
            <h1>Well done!</h1>
            <h2>You made it {user}!</h2>
            <h2>🙌</h2>
        </>
    );
}
