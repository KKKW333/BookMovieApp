import React from "react";
import Home from "../screens/home/Home";
// import Details from "../screens/details/Details";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import BookShow from "../screens/bookshow/BookShow";
// import Confirmation from "../screens/confirmation/Confirmation";
import Details from '../screens/details/Details'

const Controller = () => {
  const baseUrl = "/api/v1/";

  return (


    <div className="main-container">
      <Routes>
        <Route
          exact
          path="/"
          element={<Home />}
        />

        <Route
          exact
          path="/details"
          element={<Details />}
        />




        {/* 
        <Route
          path="/bookshow/:id"
          render={(props) => <BookShow {...props} baseUrl={baseUrl} />}
        />
        <Route
          path="/confirm/:id"
          render={(props) => <Confirmation {...props} baseUrl={baseUrl} />}
        /> */}

      </Routes>
    </div>



  );
};

export default Controller;
