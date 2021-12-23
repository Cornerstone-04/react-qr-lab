import React, { useState } from "react";
import Modal from "react-modal";
import { CSSTransition } from "react-transition-group";

import "../styles/header.scss";
import "../styles/modal.scss";

const Header = () => {
  const [openInfo, setOpenInfo] = useState(false);
  return (
    <header className="title">
      <h1>Generate, Download & Scan QR Code.</h1>
      <i className="fas fa-info-circle" onClick={() => setOpenInfo(true)}></i>
      <CSSTransition isOpen={openInfo} timeout={500}>
        <Modal
          closeTimeoutMS={500}
          onRequestClose={() => setOpenInfo(false)}
          className="info"
          isOpen={openInfo}
        >
          <div className="info-header">
            <h2>Welcome to QR Lab</h2>
          </div>
          <div className="info-content">
            <p>
              Enter your url in the textfield and click on "Generate" to get
              your qr code.
            </p>
            <p>
              Upload a qr code from your local storage by clicking on "scan" to
              get the message embedded in it.
            </p>
            <p>Scan a qr code with the live scan option to get your url.</p>
          </div>
          <div className="info-exit">
            <button onClick={() => setOpenInfo(false)}>Okay</button>
          </div>
        </Modal>
      </CSSTransition>
    </header>
  );
};

export default Header;
