import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import Home from '../home/Home';
import ProfileDetails from '../profile-detail/Profile-detail';

function Routes() {
  return (
    <HashRouter>
      <Switch>
        <Route
          exact={true}
          path='/'
          render={(e, props) => <Home {...e} data={props} />}
        />
        <Route
          exact={true}
          path='/profileDetails'
          render={(e, props) => <ProfileDetails {...e} data={props} />}
        />
      </Switch>
    </HashRouter>
  );
}

export default Routes;
