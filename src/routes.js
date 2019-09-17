import React from 'react'
import Layout from './Hoc/Layout'
import { Switch, Route } from 'react-router-dom'

import PrivateRoute from './Components/authRoutes/privateRoutes'
import PublicRoute from './Components/authRoutes/publicRoutes'

import Home from './Components/home'
import SignIn from './Components/signin'

import Dashboard from './Components/admin/Dashboard'
import AdminMatches from './Components/admin/matches'
import AddEditMatch from './Components/admin/matches/addEditMatch'

const Routes = (props) => {
  return(
    <Layout>
        <Switch>
          <PrivateRoute {...props} exact component={AddEditMatch} path="/admin_matches/edit_match/:id"/>
          <PrivateRoute {...props} exact component={AdminMatches} path="/admin_matches"/>
          <PrivateRoute {...props} exact component={Dashboard} path="/dashboard"/>
          <PublicRoute {...props} restricted={true} exact component={SignIn} path="/sign_in"/>
          <PublicRoute {...props} restricted={false} exact component={Home} path="/"/>
        </Switch>
    </Layout>
  )
}

export default Routes;
