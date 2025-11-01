import React, { useState, useEffect } from 'react';
import s from './FeedBacks.module.css';
// import StarRating from "./StarRating.jsx";
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';
import ModalFeedBack from './ModalFeedBack.jsx';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

const FeedBacks = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    fetch('https://sound-wave.b.goit.study/api/feedbacks?limit=5&page=1')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setFeedbacks(data.data);
      });
  }, []);
  return (
    <div className={s.section}>
      <div className="container">
        {feedbacks.length > 0 &&
          feedbacks.map(feedback => {
            return <></>;
          })}

        <button
          className={s.button}
          type="button"
          onClick={() => {
            setModalOpen(!modalOpen);
          }}
        >
          Leave feedback
        </button>
      </div>
      {modalOpen && <ModalFeedBack setModalOpen={setModalOpen} />}
    </div>
  );
};

export default FeedBacks;
