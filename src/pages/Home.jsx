import React from "react";
import { Login } from "../components/Login";
import { Banner } from "../components/Banner";

export const Home = () => {
  return (
    <div className="flex p-3 mb-56">
      <Login />
      <Banner />
    </div>
  );
};
