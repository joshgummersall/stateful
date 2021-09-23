import React from "react";
import ReactDOM from "react-dom";
import Shell from "./Shell";

// Redux specifics
import { Provider } from "react-redux";
import { store } from "./redux";

// Recoil specifics
import { RecoilRoot } from "recoil";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <RecoilRoot>
          <Shell />
      </RecoilRoot>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
