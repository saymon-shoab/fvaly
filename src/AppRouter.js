import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
const AppRouter = ({children}) => {
  return (
    <>
     <Router>
        <Switch>
          <Suspense fallback={<div>Loading...</div>}>
            <Route exact path="/" component={ Home } />
          </Suspense>
        </Switch>
    </Router>
    </>
  )
}

export default AppRouter