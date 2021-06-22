import { Route, Switch } from "react-router-dom";
import React from "react";

import MovieList from "../MovieList";
import Saved from "../Saved";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route path="/saved">
          <Saved />
        </Route>

        <Route path="/">
          <MovieList />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
