import React, { useState, useEffect } from 'react';
import s from './FeedBacks.module.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ModalFeedBack from './ModalFeedBack.jsx';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Rating from './Rating.jsx';

const FeedBacks = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  console.log();
  

  useEffect(() => {
    fetch('https://sound-wave.b.goit.study/api/feedbacks?limit=5&page=1000')
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
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={swiper => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          {feedbacks.length > 0 &&
            feedbacks.map(feedback => {
              return (
                <SwiperSlide>
                  <div
                    style={{
                      paddingBottom: '40px',
                      boxSizing: 'border-box',
                      height: '100%',
                    }}
                  >
                    <div className={s.stars}>
                      <Rating value={feedback.rating} isChange={false}></Rating>
                    </div>
                    <p className={s.description}>{feedback.descr}</p>
                    <p className={s.name}>{feedback.name}</p>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
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
