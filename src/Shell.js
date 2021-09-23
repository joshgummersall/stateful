import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

import Counters from "./Counters";
import RecoiledRedux from "./RecoiledRedux";

export default function Shell() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Counters</Link>
            </li>
            <li>
              <Link to="/rr">Recoiled Redux</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Switch>
        <Route path="/rr">
          <RecoiledRedux />
        </Route>

        <Route path="/">
          <Counters />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
