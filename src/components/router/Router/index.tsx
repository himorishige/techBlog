import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Detail, Page404, Home } from 'src/components/pages';

const Router: React.VFC = () => {
  return (
    <Switch>
      <Route
        path="/post"
        render={({ match: { url } }) => (
          <Switch>
            <Route exact path={url} render={() => <Redirect to="/" />} />
            <Route path={`${url}/detail`}>
              <Detail />
            </Route>
            <Route path={`${url}/*`}>
              <Page404 />
            </Route>
          </Switch>
        )}
      />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
};

export default Router;
