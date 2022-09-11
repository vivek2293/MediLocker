import React from "react";
import { Routes } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
        <Route (...rest) render = (props => {
            if(auth.isAuthenticated()) {

            }
        }) />
    )
};