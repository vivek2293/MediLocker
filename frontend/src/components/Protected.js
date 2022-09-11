import React, { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"

function Protected(props){
    const TOKEN_KEY = 'jwt';
    localStorage.setItem(TOKEN_KEY, 'TestLogin');
    const { Component } = props;
    const navigate = useNavigate();
    useEffect(() => {
        let login = localStorage.getItem(TOKEN_KEY);
        if(!login){
            navigate('/login')
        }
    });

    return (
        <div>
            <Component />
        </div>
    )
}

export default Protected;