import React, { Component } from 'react';
import {Route, Redirect} from 'react-router-dom';

//Private Route rules:


const PrivateRoute = ({ component: Component, ...rest }) => {
    const token = window.localStorage.getItem('token';
    return (
        <Route
        {...rest}
        render
    ))
}

export default PrivateRoute;