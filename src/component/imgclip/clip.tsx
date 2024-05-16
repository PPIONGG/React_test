import React from "react";
import logo from "./../../assets/logo.png";

const Clip = () => {
  return (
    <div>
      <h1>Img</h1>
      <div>
        <img className="myImglogo" src={logo} alt="" />
      </div>
      <div>
        <div style={{ width: "50px" }}>
          <a
            href="https://interapp4.rd.go.th/swhouse/search1_name.php"
            style={{
              display: "block",
              height: "50px",
              clipPath: "circle(50% at 50% 50%)",
            }}
          >
            <img src={logo} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Clip;
