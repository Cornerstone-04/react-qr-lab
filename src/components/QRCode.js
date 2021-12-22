import React, { useState } from "react";
import QRCode from "qrcode";
import Header from "./Header";

import "../styles/qrcode.scss";
const Generator = () => {
  const [text, setText] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const generateQR = async () => {
    try {
      const response = await QRCode.toDataURL(text);
      setImageUrl(response);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <Header />
      <section className="main">
        <div>
          <div className="form">
            <input
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter text here"
              className="textfield"
            />
            <button
              onClick={() => {
                generateQR();
              }}
              className="create"
            >
              Generate
            </button>
          </div>
          {imageUrl ? (
              <div className="codeImg">
                <a href={imageUrl} download>
                  <img src={imageUrl} alt="qrcode" />
                </a>
              </div>
          ) : null}
        </div>
        <div></div>
        <div></div>
      </section>
    </div>
  );
};

export default Generator;
