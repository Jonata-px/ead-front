import React from 'react';
import SignIn from '../pages/login/SignIn';
import {
    Switch,
    Route
  } from "react-router-dom";


const AuthRoutes = () => (
    <Switch>
        <Route path="*">
            <SignIn/>
        </Route>
    </Switch>
);

export default AuthRoutes;