/* 
parcel is a module bundler which is used to optimise our react app it does many things like minimize our code,clean our code , minifiying , gen port number, hmr ..etc
hmr - hot module replacement , it will watch for file changes in our code and automatically built it (like nodemon) . it uses a file watcher algorithm written in c++
*/
import React from "react";
import ReactDOM from "react-dom/client";
const heading1 = React.createElement(
  "h1",
  {},
  "h1 element1 ignited using parcel"
);
const heading2 = React.createElement(
  "h1",
  {},
  "h1 element2 ignited using parcel"
);
const div1 = React.createElement("div", { id: "container" }, [
  heading1,
  heading2,
]);
const rootnew = ReactDOM.createRoot(document.getElementById("root"));
rootnew.render(div1);
