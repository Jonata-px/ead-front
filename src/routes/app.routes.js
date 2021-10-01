
import React from 'react';

import {Switch,Route} from "react-router-dom";

import Dashboard from '../pages/Dashboard/Home';
import Materias from '../pages/Dashboard/Materias';
import AreaUser from '../pages/Dashboard/AreaUser';
import Aulas from '../pages/Dashboard/Aulas';
import NovaAula from '../pages/Dashboard/NovaAula';

const DashboardRoutes = () => (
    <Switch>
        <Route exact path="/" >
            <Dashboard />
        </Route>

        <Route exact path="/materias" >
            <Materias />
        </Route>

        <Route exact path="/minhaConta" >
            <AreaUser />
        </Route>

        <Route exact path="/aulas/:materia/:aulaId" >
            <Aulas />
        </Route>

        <Route exact path="/novaAula" >
            <NovaAula />
        </Route>
    </Switch>
);

export default DashboardRoutes;