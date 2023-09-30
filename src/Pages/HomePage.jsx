import React from "react";
import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

function HomePage() {
 


  return (
    <MainLayout>
    <div className="bg-light p-5 mt-4 rounded-3">
    <h1> Get Started With The POS Web Application</h1>
    <p className="mt-3"> This Web Application Project Was made by Javascript React, Usually For these 
    kinds of Applications JQuery Makes Your life Easier But Im Working With What I Know😃
    </p>
    <Link to="/pos" className="btn btn-primary mt-3"> Continue </Link>
  </div>
    </MainLayout>
  )
}

export default HomePage;