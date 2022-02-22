import "aframe";
import "aframe-particle-system-component";
import React from "react";
import { Link } from "react-router-dom";

export default class FirstVr extends React.Component {
  render() {
    return (
      <div>
        {/* <div className="case">
          <nav className="navs"></nav>
          <div className="case1">
            <div className="case-txt">
              <h1 style={{ fontSize: "2.5em", color: "#fff" }}>
                Create Account For Bank Owners Digitally, To be recognise
                everywhere by any Bank.
              </h1>
            
            </div>
            <div className="case-btn">
              <button className="btn">
                <Link to="/form"> Start Create</Link>
              </button>
            </div>
          </div>
          <div className="case2">
            <img
              src="/2.png"
              alt=""
              style={{
                width: "90%",
                height: "70%",
              }}
            />
          </div>
        </div> */}
        <section id="hero" class="hero d-flex align-items-center">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 d-flex flex-column justify-content-center">
                <h1 data-aos="fade-up">
                  We offer modern solutions for account Details to your business
                </h1>
                <h2 data-aos="fade-up" data-aos-delay="400">
                  We are create platform for your user data to be stored, and
                  saved. So as for your data to be editale at anytime.
                </h2>
                <div data-aos="fade-up" data-aos-delay="600">
                  <div class="text-center text-lg-start">
                    <a
                      style={{
                        textDecoration: "none",
                        listStyle: "none",
                        padding: "1.6em",
                      }}
                      href="/form"
                      className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                    >
                      <span>Get Started</span>
                      <i class="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div
                class="col-lg-6 hero-img"
                data-aos="zoom-out"
                data-aos-delay="200"
              >
                <img src="/4.png" class="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
