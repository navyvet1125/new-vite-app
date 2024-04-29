import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Root from "./routes/root";
import {loader as rootLoader, action as rootAction,} from "./actions/root_action";
import ErrorPage from "./routes/error-page";
import {loader as contactLoader,} from "./actions/contact_loader";
import Contact from "./routes/contact";
import EditContact  from "./routes/edit";
import {action as editAction, action as contactAction,} from "./actions/editAction"
import { action as destroyAction } from "./routes/destroy";
import Index from "./routes/index";

import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Root />}
      loader={rootLoader}
      action={rootAction}
      errorElement={<ErrorPage />}
    >
      <Route errorElement={<ErrorPage />}>
        <Route index element={<Index />} />
        <Route
          path="contacts/:contactId"
          element={<Contact />}
          loader={contactLoader}
          action={contactAction}
        />
        <Route
          path="contacts/:contactId/edit"
          element={<EditContact />}
          loader={contactLoader}
          action={editAction}
        />
        <Route
          path="contacts/:contactId/destroy"
          action={destroyAction}
        />
      </Route>
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
