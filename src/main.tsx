import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App.tsx";
import { Configuration } from "./Configuration.tsx";

ReactDOM.createRoot(document.getElementById("app") as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route path="" Component={App} />
      <Route path="/configuration" Component={Configuration} />
    </Routes>
  </BrowserRouter>,
);
