import React ,{ useState } from 'react';
import ReactDOM from 'react-dom';
import './Dialog.css';

const useConfirm = (title, message) => {
  const [promise, setPromise] = useState(null);

  const confirm = () => new Promise((resolve, reject) => {
    setPromise({resolve});
  });

  const handleConfirm = () => {
    promise.resolve(true);
    setPromise(null);
  };

  const handleCancel = () => {
    promise.resolve(false);
    setPromise(null);
  };
  
  const dialog = () => (
    promise !== null ? 
    ReactDOM.createPortal(
      <React.Fragment>
        <div className="ModalOverlay"/>
        <div className="ModalWrapper">
          <div className="Modal">
            <div className="ModalHeader">
              {title}
            </div>
            <div className="ModalContent">
              <p>
                {message}
              </p>
            </div>
            <div className="ModalFooter">
              <button className="ModalButton" onClick={handleCancel}>取消</button>
              <button className="ModalButton" onClick={handleConfirm}>確定</button>
            </div>
          </div>
        </div>
      </React.Fragment>
      ,document.body
    )
    : null
  );
  return [dialog, confirm];
};

const useAlert = (title, message) => {
  const [promise, setPromise] = useState(null);

  const confirm = () => new Promise((resolve, reject) => {
    setPromise({resolve});
  });

  const handleConfirm = () => {
    promise.resolve();
    setPromise(null);
  };
  
  const dialog = () => (
    promise !== null ? 
    ReactDOM.createPortal(
      <React.Fragment>
        <div className="ModalOverlay"/>
        <div className="ModalWrapper">
          <div className="Modal">
            <div className="ModalHeader">
              {title}
            </div>
            <div className="ModalContent">
              <p>
                {message}
              </p>
            </div>
            <div className="ModalFooter">
              <button className="ModalButton" onClick={handleConfirm}>確定</button>
            </div>
          </div>
        </div>
      </React.Fragment>
      ,document.body
    )
    : null
  );
  return [dialog, confirm];
};

export {useConfirm, useAlert};