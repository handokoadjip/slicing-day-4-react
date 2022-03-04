import React from "react";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <section className="p-5 bg-light">
      <div className="container d-flex justify-content-center align-items-center">
        <div className="row justify-content-center pt-5">
          <div className="col-lg-1 mb-5 mb-lg-0">
            <div className="wrapper text-center text-lg-start h-100 d-flex align-items-center">
              <Link to="#">
                <i className="fas fa-arrow-left"></i>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 mb-5 mb-lg-0 border-end px-5">
            <div className="wrapper text-center text-lg-start">
              <p className="text-fade-black-1 text-uppercase">previous post</p>
              <h3>The ultimate guide to traveling when you have no money</h3>
            </div>
          </div>
          <div className="col-lg-4 mb-5 mb-lg-0 border-start px-5">
            <div className="wrapper text-center text-lg-start">
              <p className="text-fade-black-1 text-uppercase">next post</p>
              <h3>How to find and buy good travel insurance</h3>
            </div>
          </div>
          <div className="col-lg-1 mb-5 mb-lg-0">
            <div className="wrapper text-center text-lg-start h-100 d-flex align-items-center">
              <Link to="#">
                <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
