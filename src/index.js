import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';

import FormFly from "./components/FormFly";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <h1 className="text-3xl font-bold underline text-blue-500">
      Hello world!
    </h1>
    <FormFly></FormFly>
    </>

);