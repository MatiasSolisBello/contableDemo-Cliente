import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import HomePage from '../components/HomePage'
import LoginPage from '../components/LoginPage'
import RegisterPage from '../components/RegisterPage'
import NotFoundPage from '../components/NotFoundPage'
import Layout from '../components/layouts/Layout'
import BodegaPage from '../components/admin/BodegaPage'
import ProductoPage from '../components/ProductoPage'
import UsuarioPage from '../components/UsuarioPage'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import roles from '../helpers/roles'
import routes from '../helpers/routes'

export default function AppRouter() {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route exact path={routes.home} component={HomePage} />
                    <PublicRoute exact path={routes.login} component={LoginPage} />
                    <PublicRoute exact path={routes.register} component={RegisterPage} />
                    <Route exact path={routes.producto} component={ProductoPage} />

                    <PrivateRoute exact path={routes.bodega} component={BodegaPage} />
                    <PrivateRoute hasRole={roles.admin} exact path={routes.admin.usuario} component={UsuarioPage} />


                    <Route path="*" component={NotFoundPage} />
                </Switch>
            </Layout>
        </Router>
    )
}