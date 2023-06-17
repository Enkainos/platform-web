import { createRoot } from 'react-dom/client';

import 'semantic-ui-css/semantic.min.css'
import './css/index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {init} from "@amplitude/analytics-browser";
import HomePage from "./pages/HomePage";
import DefaultLayout from "./layouts/DefaultLayout";
import PlansPage from "./pages/PlansPage";
import {Loader} from "semantic-ui-react";

init(import.meta.env.VITE_AMPLITUDE_API_KEY);
const container = document.getElementById('root');
const root = createRoot(container);
const router = createBrowserRouter([{
    element: <DefaultLayout/>,
    children: [
        {path: "/", element: <HomePage />},
        {path: "/plans", element: <PlansPage />},
    ]},
])

root.render(
    <RouterProvider router={router} fallbackElement={<Loader/>}/>
);