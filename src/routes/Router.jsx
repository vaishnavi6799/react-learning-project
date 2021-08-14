import React from 'react';
import { Route, Switch,BrowserRouter as Router } from 'react-router-dom';
import { routes } from '.';
const AppRouter = () => {

    return( 
       <>
       <Router> 
        <Switch>
          { routes.map((route) => (
              <Route key={route.path} {...route} />
            ))}
        </Switch>
        </Router>
      </>);


};
export default AppRouter;