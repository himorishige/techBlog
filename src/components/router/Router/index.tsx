import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Detail, Page404, Home, Admin, AdminDetail } from 'src/components/pages';

const Router: React.VFC = () => {
  return (
    <Switch>
      <Route
        path="/posts"
        render={({ match: { url } }) => (
          <Switch>
            <Route exact path={url} render={() => <Redirect to="/" />} />
            <Route path={`${url}/:id`} component={Detail} />
            <Route path={`${url}/*`}>
              <Page404 />
            </Route>
          </Switch>
        )}
      />
      <Route
        path="/admin"
        render={({ match: { url } }) => (
          <Switch>
            <Route exact path={url} component={Admin} />
            <Route path={`${url}/:id`} component={AdminDetail} />
            <Route path={`${url}/*`} component={Page404} />
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
