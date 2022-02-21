import "aframe";
import "aframe-particle-system-component";
import React from "react";
import { Link } from "react-router-dom";

export default class FirstVr extends React.Component {
  render() {
    return (
      <div>
        <div className="case">
          <nav className="navs"></nav>
          <div className="case1">
            <div className="case-txt">
              <h1 style={{ fontSize: "2.5em", color: "#fff" }}>
                Create Account For Bank Owners Digitally, To be recognise
                everywhere by any Bank.
              </h1>
              {/* <div className="case-btn">
                <button className="btn">
                  <Link to="/form"> Start Create</Link>
                </button>
              </div> */}
              {/* <div className="case-img">
                <img
                  src="/3.png"
                  alt=""
                  style={{
                    width: "45%",
                    height: "20%",
                  }}
                />
              </div> */}
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
                // filter: "drop-shadow(30px 10px 4px #ccc)",
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}
