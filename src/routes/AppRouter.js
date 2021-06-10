import React, { Suspense, lazy } from "react"
import { Router, Route, Switch, Redirect } from "react-router-dom"
import { createBrowserHistory } from "history"

export const history = createBrowserHistory()

const Home = lazy(() => import("components/Home/Home"))
const Overview = lazy(() => import("components/Overview/Overview"))
const Dashboard = lazy(() => import("components/Dashboard/Dashboard"))

const AppRouter = () => (
  <Router history={history}>
    {" "}
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/overview' component={Overview} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/' component={Home} />
      </Switch>
    </Suspense>
  </Router>
)

export default AppRouter
