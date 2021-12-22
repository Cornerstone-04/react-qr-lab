import React, { useState, useRef } from "react";
import QRCode from "qrcode";
import Header from "./Header";
import QrReader from "react-qr-reader";

import "../styles/qrcode.scss";
const Generator = () => {
  const [text, setText] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [scanResult, setScanResult] = useState("");

  const qrRef = useRef(null);
  const handleErrorFile = (error) => {
    console.log(error);
  };
  const handleScanFile = (result) => {
    if (result) {
      setScanResult(result);
    }
  };

  const onScanFile = () => {
    qrRef.current.openImageDialog();
  };

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
        <div className="gen">
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
        <div className="scan">
          <button onClick={onScanFile}>Scan QR Code</button>
          <QrReader
            className="qrreader"
            ref={qrRef}
            delay={300}
            onError={handleErrorFile}
            onScan={handleScanFile}
            legacyMode
          />
          <p>
            Scanned Code:{" "}
            <a rel="noreferrer" target="_blank" href={scanResult}>
              {scanResult}
            </a>
          </p>
        </div>
        <div></div>
      </section>
    </div>
  );
};

export default Generator;
