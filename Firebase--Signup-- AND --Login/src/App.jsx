import { RouterProvider } from "react-router-dom";
import router from "./Router/Routes";
import React from "react";
import AuthProvider from "./Pages/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
