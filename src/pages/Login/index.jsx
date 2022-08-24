import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts";

export default function Login() {
    const [inputValue, setInputValue] = useState("");

    const {setUser} = useAuth(); // custom hook

    const inputRef = useRef(); // can give direct access to particular DOM element, also does not change, also good to use for timers

    const goTo = useNavigate(); // react hook for redirecting

    function handleInput(e) {
        setInputValue(e.target.value);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        goTo("/"); // sends to home page
        setUser(inputValue);
    }

    useEffect(() => {
        inputRef.current.focus() // allows access to stuff from DOM
    }, []);

    return (
        <form onSubmit={handleSubmit}>
            <input ref={inputRef} type="text" onChange={handleInput} value={inputValue} placeholder="username" autoComplete="off"/>
            <br />
            <input type="submit" />
        </form>
    );
}
