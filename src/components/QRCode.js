import React, { useState, useRef } from "react";
import QRCode from "qrcode";
import Header from "./Header";
import QrReader from "react-qr-reader";

import "../styles/qrcode.scss";
const Generator = () => {
  const [text, setText] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [scanResult, setScanResult] = useState("");
  const [webCam, setWebCam] = useState("");

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

  const handleScanCam = (result) => {
    if (result) {
      setWebCam(result);
    }
  };

  const handleErrorCam = (error) => {
    console.log(error);
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
              <a href={imageUrl} download="code.jpg">
                <img src={imageUrl} alt="qrcode" />
              </a>
            </div>
          ) : null}
        </div>
        <div className="scan">
          <button onClick={onScanFile}>Scan</button>
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
            <a rel="noopener noreferrer" target="_blank" href={scanResult}>
              {scanResult}
            </a>
          </p>
        </div>
        <div className="webcam">
          <h2>QR Code scanner</h2>
          <QrReader
            className="qrscanner"
            delay={300}
            onError={handleErrorCam}
            onScan={handleScanCam}
          />
          <p>
            Scanned Code:{" "}
            <a rel="noopener noreferrer" target="_blank" href={webCam}>
              {webCam}
            </a>{" "}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Generator;
