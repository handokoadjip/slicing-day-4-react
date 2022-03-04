import { Img1, Img2 } from "assets/source/image";
import React from "react";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <section>
      <div className="container mb-5 py-5">
        <div className="row">
          <div className="col-lg-3 d-flex align-items-center mt-5 pt-5">
            <div className="wrapper text-center text-lg-start">
              <nav className="text-uppercase">
                <Link className="text-decoration-none mb-2 d-block" to="#">
                  <i className="far fa-user text-primary me-3"></i>milan
                  vuckovic
                </Link>
                <Link className="text-decoration-none mb-2 d-block" to="#">
                  <i className="far fa-calendar-alt text-primary me-3"></i>25
                  july 2015
                </Link>
                <Link className="text-decoration-none mb-2 d-block" to="#">
                  <i className="far fa-bookmark text-primary me-3"></i>
                  travel
                </Link>
              </nav>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="wrapper fs-5">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
                est, dignissimos quia tenetur error dolore commodi perspiciatis
                quo voluptates? Voluptate harum, unde cupiditate tempora totam
                cumque asperiores libero vitae, molestias fugiat iure ipsum
                explicabo eum modi obcaecati itaque maiores debitis, consectetur
                pariatur non dolorem quo. Adipisci expedita numquam quibusdam
                dolore.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae ipsam, beatae ipsum fugiat nemo enim quasi est! Neque,
                corrupti veritatis?
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure,
                molestiae voluptate. Ab voluptatibus pariatur sequi architecto
                aliquam cum aspernatur culpa dolorum impedit blanditiis quos
                molestias exercitationem ducimus placeat, expedita voluptatum et
                veniam repellat voluptate labore!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mb-5 py-5">
        <div className="row">
          <div className="col-lg-9 justify-content-center">
            <img className="h-image-600px w-100" src={Img1} alt="image-1" />
          </div>
          <div className="col-lg-3 d-flex align-items-center mt-5 pt-5 mt-4">
            <div className="wrapper">
              <div className="list-text"></div>
              <p className="text-uppercase ls-3px fs-7">
                iceland by anders jilden / unsplash
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mb-5 py-5">
        <div className="row">
          <div className="col-lg-3 d-flex align-items-center mt-5 pt-5">
            <div className="wrapper text-center text-lg-start">
              <p className="fs-4 border-top-primary-2px pt-4 ff-merriweather mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                rerum voluptates nulla, eligendi obcaecati delectus!
              </p>
              <p className="text-uppercase d-flex align-items-center fs-6">
                <i className="far fa-2x fa-user-circle text-primary me-3"></i>
                richard bach
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="wrapper fs-5">
              <div className="text">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quidem est, dignissimos quia tenetur error dolore commodi
                  perspiciatis quo voluptates? Voluptate harum, unde cupiditate
                  tempora totam cumque asperiores libero vitae, molestias fugiat
                  iure ipsum explicabo eum modi obcaecati itaque maiores
                  debitis, consectetur pariatur non dolorem quo. Adipisci
                  expedita numquam quibusdam dolore.
                </p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Iure, molestiae voluptate. Ab voluptatibus pariatur sequi
                  architecto aliquam cum aspernatur culpa dolorum impedit
                  blanditiis quos molestias exercitationem ducimus placeat,
                  expedita voluptatum et veniam repellat voluptate labore!
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae ipsam, beatae ipsum fugiat nemo enim quasi est!
                  Neque, corrupti veritatis?
                </p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quidem est, dignissimos quia tenetur error dolore commodi
                  perspiciatis quo voluptates? Voluptate harum, unde cupiditate
                  tempora totam cumque asperiores libero vitae, molestias fugiat
                  iure ipsum explicabo eum modi obcaecati itaque maiores
                  debitis, consectetur pariatur non dolorem quo. Adipisci
                  expedita numquam quibusdam dolore.
                </p>
              </div>
              <div className="comment">
                <div className="love-share d-flex justify-content-center my-4 py-4">
                  <p className="text-uppercase d-flex align-items-center fs-6 me-5">
                    <i className="fas fa-heart text-primary me-3"></i>827 likes
                  </p>
                  <p className="text-uppercase d-flex align-items-center fs-6">
                    <i className="fas fa-share-alt me-3"></i>share this
                  </p>
                </div>
                <div className="form">
                  <form action="" method="post">
                    <div className="mb-3">
                      <textarea
                        className="form-control"
                        name="comment"
                        id="comment"
                        cols="30"
                        rows="8"
                        placeholder="Type your comment here"
                      ></textarea>
                    </div>
                    <div className="mb-3 float-end">
                      <button
                        className="btn btn-light text-uppercase py-3 px-5"
                        type="submit"
                      >
                        send comment
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 d-flex mt-5 pt-5">
            <div className="wrapper text-center text-lg-start w-100">
              <img
                className="w-100 h-image-200px border-top-primary-2px py-3"
                src={Img2}
                alt="image-2"
              />
              <p className="text-uppercase text-primary fs-7 mb-2">
                also recomended
              </p>
              <p className="ff-merriweather text-capitalize fs-4">
                how to teach english and live in spain
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
