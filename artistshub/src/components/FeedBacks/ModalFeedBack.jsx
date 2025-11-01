import React, { useState, useEffect } from 'react';
import s from './ModalFeedBack.module.css';
import images from '../../assets';
// import RatingStars from "./RatingStars";

const ModalFeedBack = ({ setModalOpen }) => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  function handleName(e) {
    setName(e.target.value);
  }

  function handleMassege(e) {
    setMessage(e.target.value);
  }
  return (
    <>
      <div
        className={`${s.overlay} del`}
        onClick={e => {
          if (e.target.classList.contains('del')) {
            setModalOpen(false);
          }
        }}
      >
        <div className={s.modal}>
          <button
            className={s.close}
            onClick={() => {
              setModalOpen(false);
            }}
          >
            <img src={images.close} />
          </button>
          <h2 className={s.title}>Submit feedback</h2>
          <form className={s.form}>
            <div className={s.inputBlock}>
              <p>Name</p>
              <input
                type="text"
                className={s.input}
                name="name"
                value={name}
                onChange={handleName}
              ></input>
            </div>
            <div className={s.inputBlock}>
              <p>Message</p>
              <textarea
                className={s.textarea}
                name="message"
                value={message}
                onChange={handleMassege}
              >
                sdfsdf
              </textarea>
            </div>
            {/* <div><RatingStars/></div> */}
            <button type="submit" className={s.button}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ModalFeedBack;
