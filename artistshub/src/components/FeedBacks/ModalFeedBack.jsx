import React, { useState, useEffect } from 'react';
import s from './ModalFeedBack.module.css';
import images from '../../assets';
import StarRating from './StarRating.jsx';
import { Notify } from 'notiflix';

const ModalFeedBack = ({ setModalOpen }) => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleName(e) {
    setName(e.target.value);
  }

  function handleMassege(e) {
    setMessage(e.target.value);
  }

  const validateForm = () => rating > 0 && (name || message);

  const onSubmit = e => {
    e.preventDefault();

    if (!validateForm()) {
      alert(
        "Please fill in all required fields and ensure amount is greater than zero."
      );
      return;
    }

    fetch('https://sound-wave.b.goit.study/api/feedbacks', {
      body: JSON.stringify({
        name,
        rating,
        descr: message,
      }),
      headers: {
        Accept: ' application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    setModalOpen(false);

    Notify.success('Feedback sent', {
      timeout: 3000,
    });
  };
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
          <form className={s.form} onSubmit={onSubmit}>
            <div className={s.inputBlock}>
              <p>Name</p>
              <input
                required
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
                required
                className={s.textarea}
                name="message"
                value={message}
                onChange={handleMassege}
              ></textarea>
            </div>
            <StarRating //leave feedback modal
              rating={rating}
              setRating={setRating}
              hover={hover}
              setHover={setHover}
            />
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
